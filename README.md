# Sprint Challenge: Single Page Applications - Smurfs

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Single Page Applications, React Router I - II & HTTP/AJAX I - II. In your challenge for this Sprint, you will demonstrate proficiency by creating a Single Page Application that performs CRUD operations on a locally hosted API, Smurfs.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency ReactJS Fundamentals and your command of the concepts and techniques in the Function Components and Class Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, you will create a Single Page Application complete with Client-Side Routing and components that are built to consume a locally hosted Web Server (API). Your application will be built to consume live data that will be served up by your Node/Express web server. You will design, architect, and develop a Smurf Village from scratch. Your creative abilities

**Note** Utilize the following to help design the Data for your Application:

- [Here](http://smurfs.wikia.com/wiki/Category:Smurfs_Characters) is a list of Smurf data you can use to create your village.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] Explain the differences between `client-side routing` and `server-side routing`.
- [x] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
- [x] Mention three tools we can use to make AJAX requests.


## Project Set Up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add PM as collaborator on Github.
- [x] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [x] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on this Branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.
- [ ] **RUN** `yarn install or npm install` at the root to retrieve all the dependencies for the node server. You will not need to create any react apps here nor will you need to install any other dependencies. You should have all you need in this repo.
- [ ] **LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
- [ ] **RUN** `yarn start or npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an Array `[]` with a smurf returned to you. This is an array that your **API** will be using to store our Smurf Data.
- [ ] **LOOK** at your `village` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [ ] **cd** into `village` and run `yarn install or npm install` to retrieve the client side dependencies.
- [ ] **RUN** `yarn start or npm start` to fire up your React application.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.
## Minimum Viable Product

The MVP of this project will be broken up between 2 stages. Follow each step and be sure to use your design/style skills to make this application look professional.

### Stage 1

Construct your Components to build a Single Page Application. Keep your components separate and design them as if they are pages before adding in your Router.

- [ ] Construct an AXIOS request to retrieve an array all the Smurfs in the Smurf DB simply write a `GET` to the endpoint `/smurfs`.
- [ ] Display those smurfs in a list on the screen.
- [ ] Construct an AXIOS request to `POST` to add a Smurf to the Smurf DB you'll need all three fields.
- [ ] Create a form that will allow users to add Smurfs to the Smurf DB.
- [ ] If a Smurf is created correctly, you should see a response that is an array of Smurfs with unique id's assigned to each Smurf.

- Example:

```js
{
  name: 'Sleepy',
  age: 323,
  height: '5cm'
}
```

### Stage 2

Add a Router to this application by using React Router.

- [ ] You'll start by wrapping your `root` component in the `Router` component.
- [ ] Declare your routes with `Route`.
- [ ] Then make it so you can navigate to your routes using `Link`.
- [ ] Create two `routes` in your `App` component, one at `'/'` for your `Smurfs` component,and one at `/smurf-form` for your form.
- [ ] Then in your `App` component, create a nav bar that will use `NavLink` to route to your different pages.

## STRETCH PROBLEMS

**HTTP/Axios Stretch Problems**

- [ ] The following two endpoints are here for you if you'd like to push yourselves a little further.

- [ ] **HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

**DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove**

- [ ] For this endpoint to work, all you need is an id sent up as part of the request url.

- [ ] If your delete worked, you'll get a list of the smurfs back.
- [ ] Example:

```js
// output: `A list of all the smurfs in the Smurf DB will be returned`
[
  {
    name: 'Brainy',
    age: 211,
    height: '5cm',
    id: 0
  },
  {
    name: 'Smurfette',
    age: 122,
    height: '12cm',
    id: 1
  }
];
```

**PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify**

- [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.
- [ ] Example:

```js
// input:
{
  id: 1,
  name: Sleepy
}
// output: `A list of all the smurfs in the Smurf DB will be returned`
[{
  name: 'Sleepy',
  age: 30,
  height: '3cm,
  id: 1
}]
```

**Router Stretch Problem**

- [ ] If a user clicks on a smurf, they should be routed to `/smurf/:id` and a single smurf should be displayed on the page.
- [ ] I know this seems like a small task, but you'll have to get crafty with your data and your logic here.
