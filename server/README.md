# team-52

GitHub Repository for Team 52 of the JP Morgan Chase Code for Good hackathon on June 4-5 2022.

# Anubhuti-Problem-Statement

## Project Timeline

- 04th June, 2022.
  - [x] Problem Statemet revealed .
  - [x] Model building started.
  - [x] Importance of individual features calculated.
- 4th June, 2022.
  - [x] Commencement of the project.
  - [x] Project deployed.

## 📄 Abstract

Anubhuti, a Non Profit, is attempting to create a learning environment for underprivileged children by acting as a liaison between schools and the community. Anubhuti works with the government to improve children's conceptual knowledge in order to help them go into school. They motivate kids to apply by raising awareness and providing incentives.

## 🎯 Objective

We aim to create a web-app which will be used to provide technological assist to Anubhuti in gathering data and information from Fellows (workers) and analysing it on a daily, weekly, or monthly basis, to assess the program's impact and reach on a monthly and quarterly basis and to boost its pitches to various funders, the group requires assistance in streamlining data collecting and generating data visualisations of their impact.

### 📍 Major Checkpoints

- ⛳ Creation of API
  - [x] Run server and request predictions
  - [x] Testing the API
- ⛳ Web Development
  - [x] Front End
    - [x] Landing page
    - [x] Input Form
    - [x] Visualization of graphical data
  - [x] Back End
    - [x] Integrating the API with the web-app
    - [x] Calling of responses for the input.

### 📚 Tech stack

- <code><img height="35" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code> HTML
- <code><img height="35" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code> CSS
- <code><img height="35" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"></code> Python
- <code><img height="35" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code> GIT
- <code><img height="35" src="https://github.com/edent/SuperTinyIcons/blob/master/images/svg/github.svg"></code> Github
- <code><img height="35" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code> NodeJS

### API Documentation

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_ATLAS_URI`

`SECRET KEY`

## API Reference

#### LOGIN

```http
  POST /login/
```

| Parameter  | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `Username` | `string` | **Required**. Username |
| `Password` | `string` | **Required**. Password |

### GET All Fellows for a given Program Associate

So we will be given the userName for each Associate from there we can use the userName to get the list of Fellows for that Associate.

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `Username` | `string` | **Required**. |

### GET All for a given Program Associate

### GET /pa/username

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `Username` | `string` | **Required**. |

### Data Entry for authorization

### POST /fellow

| Parameter | Type | Description |
| :-------- | :--- | :---------- |

<!-- App ScreenShot -->

![App Screenshot](./images/CSVMODEL.png)

For MultiLevel Authentication

### GET /pa

To Send Notification to the Program Associate that they have pending approval of the data.

### END POINTS TO ACCEPT AND REJECT THE DATA BY THE FELLOW

### POST /pa/accept

To Accept the data.

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `ID`      | `string` | **Required**. |

### POST /pa/reject

To Reject the data.

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `ID`      | `string` | **Required**. |

### For adding a STUDENT

To Add a student in the database.

### POST /fellow/student

##### Parameters

![App Screenshot](./images/StudentSchema.png)

### FOR CREATING PROGRAM MANAGER

### POST /create/pm

### Screenshots

![App Screenshot](./images/StudentObj.png)
![App Screenshot](./images/StudentSchema.png)
