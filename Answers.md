1* The single source of truth is our state tree, that is not rewritten or reshaped.
It gives us the availability to easily retrieve information in constant time and 
maintain a clean structure for the state of our application. So basically, Redux
provides us the store (object) that holds the state. Why do we need it ? Well,
React has one way data flow (from parents to children) and sometimes one of the children
wants to know the state of the other component that is hard to retrieve via parents.

2* An action is a function that is invoked when we want to pass the "type" of action that
happened at the app's view. They emit one single type and have the potential to pass along a payload(data).

3* Reducers are functions that listen for specific signals (actions) from the application. When their name is called, or that signal is dispatched, they capture information and inject it into the state of application. They do this by adding to the existing state. They do not remove information. Reducers is as an internal event listener. 

4* HTTP stands for HyperText Transfer Protocol. It's set of rules for moving data with links.
   CRUD stands for Create Read Update Delete.
   There are four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers: GET, POST, PUT/PATCH, DELETE. Method "get" helps to fetch data from the server that you can read, display or use differently (usually it's JSON object). The purpose of post method is to send data to the server (Create). PUT/PATCH helps you update existing data and DELETE is for removing something from the server.