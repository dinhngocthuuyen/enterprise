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

Coordinator can interact with student through chat room. In chat UI, it displays student list that sent messages to Coordinator. To reply messages, Coordinator just click on student name in list and reply messages. 

![image](https://user-images.githubusercontent.com/46740045/121028230-d7f23880-c7d1-11eb-8199-2540b7cb066a.png)

![image](https://user-images.githubusercontent.com/46740045/121028251-dc1e5600-c7d1-11eb-9a07-ad40506680c7.png)

Coordinator can view contribution detail in Review tab. Detail information including File name, Start date, Deadline for uploading contributions and status of deadline. Each contribution is displayed in different card.

![image](https://user-images.githubusercontent.com/46740045/121028284-e5a7be00-c7d1-11eb-810e-b185109a6ac8.png)

![image](https://user-images.githubusercontent.com/46740045/121028305-eb050880-c7d1-11eb-9308-fb9edd0b6d13.png)

![image](https://user-images.githubusercontent.com/46740045/121029896-310e9c00-c7d3-11eb-93f9-80e53c1c6e2e.png)

Coordinator can “approved” if it qualified or “not approved” if unsatisfied. They also make a comment on the contributions.

![image](https://user-images.githubusercontent.com/46740045/121029920-366be680-c7d3-11eb-9974-9ce2db443f5d.png)


### 2.5 Manager

The manager can see a list of all students and coordinators. It also shows the information of coordinators and students, and the faculties they belongs to.

![image](https://user-images.githubusercontent.com/46740045/121030767-fc4f1480-c7d3-11eb-9bcf-6115d6f5c9a3.png)

Manager can also view available topics and download contributions of these topics that have been approved by the coordinators as zip files.

![image](https://user-images.githubusercontent.com/46740045/121031022-31f3fd80-c7d4-11eb-8f6f-e88553b051ed.png)

![image](https://user-images.githubusercontent.com/46740045/121031191-56e87080-c7d4-11eb-87a2-42ec081f3bd8.png)

### 2.6 Guest

Guest can view the university’s information through those tabs: Introduction, event, admissions, student magazine, staffs. All gathered and managed by the Manager.

![image](https://user-images.githubusercontent.com/46740045/121031428-86977880-c7d4-11eb-9d86-f3ffdd6b3c26.png)

Event tab displays all events took play in university.

![image](https://user-images.githubusercontent.com/46740045/121031569-a9c22800-c7d4-11eb-941e-c2a5747d6b38.png)

![image](https://user-images.githubusercontent.com/46740045/121031600-b2b2f980-c7d4-11eb-90d1-1d23d4e84c7a.png)

Guest can see some selected reports.

![image](https://user-images.githubusercontent.com/46740045/121031637-bb0b3480-c7d4-11eb-8848-4d1ae769b0bb.png)

![image](https://user-images.githubusercontent.com/46740045/121031648-bd6d8e80-c7d4-11eb-98f3-36e1431b0831.png)

# Notes
After cloning the project  
$ npm i. 

How to push code:  
git stash (put newly modifed code)  
git pull (pull new code)   
git stash pop (add stashed code & merge code)  
git status  
git add  
git status  
git commit -m "note here"  
npm run prepush  
git push  

How to create branch on Github  
- create branch on github  
- git fetch (update new branch)  
- git checkout <branch's name> (switch to another branch)  
