1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?

With a central source of information. It makes easier to manage the same data throughout the entire app. With component state it makes easier and convinient for smaller scale application. But would get too complex for medium to large apps


2. Describe what an _Action_ is/does.
Action is basically responsible to connect with API's and send/return data to pass it to reducers and store.

3. Describe what a _Reducer_ is/does.
A reducer receives the information from action and communicates with the store to update and retrieve data from it.

4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
HTTP stands for HyperText Transport Protocol
CRUD stands for Create, Retrieve, Update and Delete.
C - POST
R - GET
U - PUT
D - DELETE