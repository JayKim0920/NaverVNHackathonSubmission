[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/YHSq4TPZ)
# To-Do App – Preliminary Assignment Submission
⚠️ Please complete **all sections marked with the ✍️ icon** — these are required for your submission.

👀 Please Check ASSIGNMENT.md file in this repository for assignment requirements.

## 🚀 Project Setup & Usage
**How to install and run your project:**  
- Clone repository onto the local storage by running 'git clone https://github.com/NAVER-Vietnam-AI-Hackathon/web-track-naver-vietnam-ai-hackathon-JayKim0920.git' on the terminal
- type 'cd web-track-naver-vietnam-ai-hackathon-JayKim0920' to change working directory
- run 'npm install' to install required dependencies
- run 'npm run dev' to run developer server

## 🔗 Deployed Web URL or APK file
✍️ [Paste your link here]

## 🎥 Demo Video
**Demo video link (≤ 2 minutes):**  
📌 **Video Upload Guideline:** when uploading your demo video to YouTube, please set the visibility to **Unlisted**.  
- “Unlisted” videos can only be viewed by users who have the link.  
- The video will not appear in search results or on your channel.  
- Share the link in your README so mentors can access it.  

✍️ [Paste your video link here]


## 💻 Project Introduction

### a. Overview

Life-Sync planner is a digital solution designed for Vietnamese students to handle complex schedule/time management. It was designed to manage schedules with categories such as class, work, group project all within a single calendar. This app seeks to provide more than a simple list to the user, but a tool that visualizes schedules for the user so they may efficiently plan their actions henceforth.

### b. Key Features & Function Manual

- Event creation/editing/delete:
    By clicking onto the '+ create event' button on the top of the page, or by clicking existing event, the user may create, edit and delete events.
    Each Event will show the date of it, the category of it, and its title.
- Calendar View:
    Visualizes events on a weekly and monthly basis. Events are set to show in different colors according to categories, so that the events will be recognized easily.
- Daily timeline view:
    Selecting a date will show all events of said date. This allows for a detailed planning for the day.
- Categorical view:
    Shows events of a certain category. This is convenient as it shows the schedules of a certain activity.

### c. Unique Features (What’s special about this app?) 

This app shows events with focus on the nature of their category(class, work, personal, group project).
This enables for a detailed schedule management with nuances to their nature. 
One may choose to see a generalized flow of the month, then focus on a certain day's detailed schedule, and check for the deadline of all events of a certain schedule. This should solve a university student's worst nightmare : unchecked deadlines flooding in.

### d. Technology Stack and Implementation Methods

Frontend : React, Vite, Typescript for a modern and efficient web application
Status management : useEvent custom hook for all CRUD work. useState, useEffect and custom hooks to seperate event data management logic from component.
Storage : browsers localStorage manages data permanence. refreshing the page or closing the app should still retain the schedules created.
Date/Time : handling and formatting dates and time were handled using the dayjs library.

### e. Service Architecture & Database structure (when used)

Service Architecture : 
    uses client-side architecture, and all logic will be ran within the browser. Does not require separate server or external API calls.
Database Structure :
    uses localStorage with simple key pair values, and stores event instances as json format strings. Each event posseses attributes like ID, title, category, start/end time.

### a. If you had more time, what would you expand?

If more time was given, the following would be added:
- Repeating events
    Events such as lectures and tutorials tend to repeat weekly, some monthly. A feature to add such options as repeating to events, would be convenient.
- Notifications
    Events may go unnoticed or forgotten by user. A notification to alert users with such events would be beneficial.
- Multi-language support
    As the author is not a vietnamese, the initial app was integrated with english. To expand the language to vietnamese, and even beyond using google translate integrations or others would expand the app's target users.
- Screen readers
    Users may have some difficulties with visual representations of schedules due to their conditions or injury. Screen readers, when implemented, can assist in these matters
- Enhanced design
    The author is not an expert at designing, such as color codes or visual alignments. With more time and knowledge, this could be enhanced for greater UX.

### b. If you integrate AI APIs more for your app, what would you do?

If the author is given the liberty and the knowledge required to integrate AI APIs, it could be used for the user to use natural language to create/edit/delete events. The user may ask 'Create a new personal event on next monday 1pm', which the API will proceed to generate a new event on the next Monday 13:00, under personal category. 


## ✅ Checklist
- [ ] Code runs without errors  
- [ ] All required features implemented (add/edit/delete/complete tasks)  
- [ ] All ✍️ sections are filled  
