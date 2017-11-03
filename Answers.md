1. Describe the concept of a "Single Source of Truth" in Redux. 
    Single source of truth (SSOT) is a concept that in one organization that the data accessed by all departments are the one and only source of data.  This is necessary to help with the business decision making.

    Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?  React state are stored in component that can be shared with other components through props.  Redux state is stored globally and for any other components to access it is to be subscribed to its store.

2. Describe what an _Action_ is/does.
    Actions are information transmitted or payload that sends data from application to the store.

3. Describe what a _Reducer_ is/does.
    When actions performs, reducer takes the previous state and action and returns the next state.  For example, an user has added a new friend, the action sends the new friend request to reducer and reducer has take the previous state of 0 friends and return a new state of 1 friends.

4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
    HTTP stands for Hyper Text Transfer Protocol and CRUD stands for Create Read Update Delete.  
    
    The four methods for HTTP is as follows;
        POST:  this method is to create a resource on the server
        GET:  this method is get some information from the server
        PUT/PATCH:  this method is used to make changes to part or all of       the resource
        DELETE:  this method is used to remove a resource from the server

    HTTP POST is what create for CRUD, a method to create resource for APIs/Servers.

    HTTP GET is what Read/Request for CRUD, a method to request data from APIs.

    HTTP Put/Patch is what Update for CRUD, a method to update/modify the current resource on server.

    HTTP Delete is what Delete is for CRUD, a method to remove part or all of resource from server.