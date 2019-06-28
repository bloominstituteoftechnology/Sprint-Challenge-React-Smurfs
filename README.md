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

- [ ] Explain the differences between `client-side routing` and `server-side routing`.
 Ok chnage of answer

 Serverside routing is when the user clicks an a link and they  are taken to an entirely new HTML page.

 Client-side routing is when the changes made are taken in directly on that page but does not navigate the user to another page. 

 Here is the explanation I researched...


 Imagine the user clicking on a simple link:  <a href="/hello">Hello!</a>

On a webapp that uses server side routing:

The browser detects that the user has clicked on an anchor element.
It makes an HTTP GET request to the URL found in the href tag
The server processes the request, and sends a new document (usually HTML) as a response. --- Like when we connect anchor tags in our nav menu's
The browser discards the old webpage altogether, and displays the newly downloaded one.
If the webapp uses client side routing:

The browser detects that the user has clicked on an anchor element, just like before.
A client side code (usually the routing library) catches this event, detects that the URL is not an external link, and then prevents the browser from making the HTTP GET request.
The routing library then manually changes the URL displayed in the browser (using the HTML5 history API, or maybe URL hashbangs on older browsers)
The routing library then changes the state of the client app. For example, it can change the root React/Angular/etc component according to the route rules.
The app (particularly the MVC library, like React) then processes state changes. It renders the new components, and if necessary, it requests new data from the server. But this time the response isn't necessarily an entire webpage, it may also be "raw" data, in which case the client-side code turns it into HTML elements.
Client-side routing sound more complicated, because it is. But some libraries really make it easy these days.


There are several upsides of client-side routing: you download less data to display new content, you can reuse DOM elements, display loading notifications to user etc. However, webapps that generate the DOM on server side are much easier to crawl (by search engines), thereby making SEO optimization easier. Combining these two approaches is also possible, the excellent Flow Router SSR is a good example for that.




- [ ] What does HTTP stand for?

It stands for Hypertext Transfer Protocol.  I also found the difference between HTTP an HTTPS (Hypertext Transfer Protocol Secure). 


 is a combination of the Hypertext Transfer Protocol (HTTP) with the Secure Socket Layer (SSL)/Transport Layer Security (TLS) protocol. TLS is an authentication and security protocol widely implemented in browsers and Web servers.


- [ ] What does CRUD stand for?

create, read, update, and delete[1] (CRUD) are the four basic functions of persistent storage. CRUD is also used to describe user interface conventions that help to view, search, and change info. 

Other variations of CRUD include:

BREAD (Browse, Read, Edit, Add, Delete) [5]
DAVE (Delete, Add, View, Edit)[6]
CRAP (Create, Replicate, Append, Process)[7]
CRUDE (Create, Read, Update, Delete, Experience)


- [ ] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create = PUT with a new URI
         POST to a base URI returning a newly created URI
Read   = GET
Update = PUT with an existing URI
Delete = DELETE
PUT can map to both Create and Update depending on the existence of the URI used with the PUT.

POST maps to Create and Update, but mostly used for create. POST can also be a partial update so we don't need the proposed PATCH method.


- [ ] Mention three tools we can use to make AJAX requests.

Fetch API--

- modern alternative to XMLHttpRequest for retrieving resources from the server

-powerful feature set 
- syntax and strucure that is flexible and easy to use
- supported by all modern web browsers
-follows a request-response approach where Fetch makes a request and returns a promise that resolves to the Response object.

-You can pass a Request object to fetch or, alternatively, just the URL of the resource to be fetched. 

Axios--

-Modern JS library built on top of XMLHttpRequest for making AJAX calls
- Can make HTTP request from both the browser and the server
-Supports the Promise API native to ES6
-Intercepts requests and responses
-Transform request and response data using promises 
-Automatically transforms JSON data
-May cancel live request

-To use Axios, you will need to install it first.npm install axios

-Axios has an easier syntax compared to that of Fetch
-Axios is definitely more readable. Axios is also popular with modern libraries such as React and Vue.

jQuery--

- Formally a front-line library used to handle everything from AJAX calls to manipulating DOM contents

- not used as much anymore since Fetch and Axios 
- can still be used for making asychronus calls 
- has a ton of support documentation 

there is Also SuperAgent(Lightweight and progressive AJAX library, focused on realiabilty and flexibility) and Request(A Simplified HTTP Client- easiest way to make HTTP calls)

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
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
