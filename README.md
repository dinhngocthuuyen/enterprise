# 1. Introduction

Our team was asked to design a system for collecting and managing student contributions in a large university. Or to put it more simply, this is a system where students will submit their documents. 
It sounds simple, but a system still has to fully meet a few functions that a basic website has. The roles available in the system include: administrator, manager, coordinator, student and guest. A brief summary of the few functions of each role, coordinator and student will be the roles that take on many tasks in this project.

- Administrator is responsible for creating accounts for each individual, each role of the system. For coordinator, student, and guest accounts, administrators must create accounts according to different faculty. In addition, it is also responsible for extending the time of submitting documents to faculty according to topics. This role is considered as an IT support of the project.  
- Manager in the system can view posts that have been reviewed by the coordinator. In addition, it is also possible to download files as zip. 
- Guest in this project is just a user visiting the system, they can see the previously approved posts. 
- The two roles that many have to do in this project are coordinators and students. The coordinator is responsible for reviewing student posts, a notification of which will be sent as an email after students submitting contributions. Once the posts are reviewed, they can interact with students through chat or comment, but only two of them are allowed to interact with each other. They will have to statistics the number of student posts through each week, month, year. And each coordinator of each faculty will only be reviewed and viewed their own posts. 
- Students will upload their contributions as docx or high-quality images, while allowing them to edit submitted posts. Students who have submitted their submissions on time, when they go through the first deadline, they can revise their old post by submitting a new file, and stepping through the second deadline, the upload system will be closed and no one can upload. When students submit, a notification is sent as an email to the coordinator in the faculty.


# 2. Implementation

### 2.1 Login

This is the login page of the web application; our team has relied on the website of the school we are studying at to design.

![image](https://user-images.githubusercontent.com/46740045/121019670-da509480-c7c9-11eb-80a2-fed2329d4aab.png)

We will get an alert if input wrong username or password.

![image](https://user-images.githubusercontent.com/46740045/121019786-f2281880-c7c9-11eb-9b94-54f38d81d963.png)

### 2.2 Admin

We used administrator account to sign in. The top right corner of the website displays the users’ names including their role. And right here we also have menu include “Profile” and “Log out”.

![image](https://user-images.githubusercontent.com/46740045/121019887-09ff9c80-c7ca-11eb-81a2-e440b1b56863.png)

When logging into an administrator account, the function of creating an account for a user will be displayed first, since only the administrator can create a user account.
The fields for creating an account includes: usernames (we have agreed with each other usernames that will be created by email), names, passwords, roles (administrators, managers, coordinators, students, guests), faculty (only for roles such as coordinators, students, and guests. Since administrators and managers do not need to divide by faculty, in the selection section we can select " None ").

The default username must be an email, when typing a username that does not meet the requirements, the field reported an error when pressing the " create " button. Password also reports an error for not typing enough of the requested characters, so the account is not created. 

![image](https://user-images.githubusercontent.com/46740045/121020839-f6086a80-c7ca-11eb-9428-dfd2ebeaf2a6.png)

Even if the field name is blank, the system will report an error and the account is still not created. 

![image](https://user-images.githubusercontent.com/46740045/121021157-47b0f500-c7cb-11eb-8900-f79149452e08.png)

When entering all the required information for the fields, the account was successfully created.  

![image](https://user-images.githubusercontent.com/46740045/121021227-5ac3c500-c7cb-11eb-896d-01054575d11f.png)

Thus, the account was successfully created. We can login with the newly created account. 

![image](https://user-images.githubusercontent.com/46740045/121021472-a1192400-c7cb-11eb-9904-85435459b926.png)

"Closure date" is a page for admins who create topics and extend the submitting time of the generated topics. The deadline for submitting the students' files will be based on 3 types of days: start date, 1st deadline, and 2nd deadline.

![image](https://user-images.githubusercontent.com/46740045/121021558-b5f5b780-c7cb-11eb-9060-5c23b65d2e7b.png)

### 2.3 Student

The first page that appears when logging in with a student account is chat. This is where students and coordinators can interact with each other. Students can't know who the coordinator is interacting with, the chat frame won't show the name, it's just " Coordinator ".

![image](https://user-images.githubusercontent.com/46740045/121023181-3b2d9c00-c7cd-11eb-90b4-e5815a252901.png)

Students can submit their contributions through upload page which shows topics created including the submit deadline. The countdown time of each item is clearly visible to help students consider and arrange the submission of documents.
![image](https://user-images.githubusercontent.com/46740045/121023152-34068e00-c7cd-11eb-879a-84c55c1baa8a.png)

Students cannot submit new contribution if they do not agree to Terms and Conditions.

![image](https://user-images.githubusercontent.com/46740045/121023502-89429f80-c7cd-11eb-905d-7b6073645937.png)


### 2.4 Coordinator



Sau khi clone về cần  
$ npm i. 

Cách push code:  
git stash (bỏ code mình mới modifed)  
git pull (pull code mới về)   
git stash pop (thêm lại code đã stash và merge code)  
git status  
git add  
git status  
git commit -m "note here"  
npm run prepush  
git push  

Cách tạo branch trên github  
- tạo branch trên github  
- git fetch (update branch mới)  
- git checkout <tên branch mình đặt> (chuyển qua branch mình)  
