1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?

Single Souce of Truth simply points out the reality that all the different pieces and components of the application all are connected to just one root object tree. This makes it easier to debug and writing the keeping track of the state. 

Redux Application state allows you to manage globally in entire application through stores while the React component state is focus on managing the state through your individual components in props. The React state is stored locally within a component and passes down the state through props. Redux, the state is stored globally in the Redux store. By subscribing to the Store, you will then have access to the state and its values. 

2. Describe what an _Action_ is/does.

Actions are also functions but when they are invoked, we pass in a 
action type along with a optional payload. They are simply Javascript objects that store information on your available actions and their payload. It contains a action creator method which you can use to create and store actions.

3. Describe what a _Reducer_ is/does.

They are functions that listen for specific signals from the application. When reducers are called, the grab the information and stores it into an already existing state. Reducers are the ones that specify how the state is to change in reponse to a action. 

4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

It stands for hypertext  Text Transfer Protocol. Protocol are set of rules or functions for communication on the web and send data of plain text and agreement on language. Hypertext makes the text smarter.  CRUD is an acronym that stand for the four main actions that we can communicate to the server and they include create, read, update, and delete. 