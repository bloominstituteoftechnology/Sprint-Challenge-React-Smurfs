###Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?
Single source of truth means that every piece of data is stored once in a shared location.
Redux Applications handle a slice of state 



###Describe what an Action is/does.
When an event occurs, an action is triggered which passes the action type & a payload to the Reducer

###Describe what a Reducer is/does.
The Reducer takes in an action type and payload.  Depending on the action type, the Reducer will use the payload to update the slice of state that the reducer has access to -- there is also a default state.



###What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

Hyper Text Transfer Protocol
Create Read Update Delete
C - POST
R - GET
U - PUT/PATCH
D - DELETE
