const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const jwtSecret = 'skdhslg5565287653fsfdfgfd3568';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 1
    },
    name: {
        type: String,
        required: true,
        minlength: 2,
      },
    _facultyId: {
        type: mongoose.Types.ObjectId,
      },
    role: {
        type: String,
        required: true
    },

    sessions: [{
        token: {
            type: String,
            required: true
        },
        expiresAt: {
            type: Number,
            required: true
        }
    }]
});

/* INSTANCE METHODS */

UserSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    //return the document except for password and session
    return _.omit(userObject, ['password', 'sessions']);
}

UserSchema.methods.generateAccessAuthToken = function() {
    const user = this;
    return new Promise((resolve, reject) => {
        //Create JSON web token and return that
        jwt.sign({_id: user._id.toHexString()}, jwtSecret, {expiresIn: '10s'}, (err, token) => {
            if (!err) {
                resolve(token);
            } else {
                reject();
            }
        })
    })
}

UserSchema.methods.generateRefreshAuthToken = function() {
    //Generate a 64 bytes hex string (it isn't saved to db, saveSessionToDatabase() does that)
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (!err) {
                let token = buf.toString('hex');
                return resolve(token);
            } else {
                reject();
            }
        })
    })
}

UserSchema.methods.createSession = function() {
    let user = this;
    return user.generateRefreshAuthToken().then((refreshToken) => {
        return saveSessionToDatabase(user, refreshToken);
    }).then((refreshToken) => {
        //Saved to database successfully
        //Now return the refresh token
        return refreshToken;
    }).catch((e) => {
        return Promise.reject('Failed to save session to database.\n' + e);
    })
}

/* MODEL METHODS (Static methods) */

UserSchema.statics.getJWTSecret = () => {
    return jwtSecret;
}

UserSchema.statics.findByIdAndToken = function(_id, token) {
    //find user by id and token
    //used in auth middleware
    const User = this;
    return User.findOne({
        _id,
        'sessions.token' : token
    })
}

UserSchema.statics.findByCredentials = function(username, password) {
    let User = this;
    return User.findOne({ username }).then((user) => {
        if (!user) return Promise.reject();
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => { //compare the entered password with the hashed password
                if (res) resolve(user);
                else reject();
            })
        })
    })
}


UserSchema.statics.hasRefreshTokenExpired = (expiresAt) => {
    let secondsSinceEpoch = Date.now() / 1000; //(1s = 1000ms)
    if (expiresAt > secondsSinceEpoch){
        //hasn't expired
        return false;
    } else {
        //has expired
        return true
    }
}


/* MIDDLEWARE */

//Befor a user document is saved, this code runs
UserSchema.pre('save', function(next) {
    let user = this;
    let costFactor = 10; //the number of hash rounds (how long it takes to hash password)
    if (user.isModified('password')){
        //If the password field has been edited/changed then run this code
        //Generate  salt and run this code
        bcrypt.genSalt(costFactor, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})


/* HELPER METHODS */

let saveSessionToDatabase = (user, refreshToken) => {
    return new Promise((resolve, reject) => {
        let expiresAt = generateRefreshTokenExpiryTime();
        if (user.sessions.length === 0){
            user.sessions.push({'token' : refreshToken, expiresAt});
        } else {
            user.sessions.set(0 ,{'token' : refreshToken, expiresAt})
        }
        user.save().then(() => {
            //Saved session successfully
            return resolve(refreshToken);
        }).catch((e) => {
            reject(e);
        })
    })
}

let generateRefreshTokenExpiryTime = () => {
    let daysUntilExpire = '10';
    let  secondsUntilExpire = daysUntilExpire * 24 * 60 *60;
    return (Date.now() / 1000) +  secondsUntilExpire;
}

const User = mongoose.model('User', UserSchema);
module.exports = {
    User
}
