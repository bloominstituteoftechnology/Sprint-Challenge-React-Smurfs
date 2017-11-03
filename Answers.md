Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?

The state of the entire application is stored in an object tree within a single store. This allows each component to access the state immediately and without having to ask a parent component for the state. State without redux would require each component in the tree to pass the state to its neighboring component. The neighboring component would then pass the state to its neighboring component. The time complexity would increase exponentially for each neighboring component which would essentially prevent scalability. Redux fixes this issue allowing infinite scalability without changing the initial time complexity.

Describe what an Action is/does.

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

Describe what a Reducer is/does.

A reducer is a simple function that takes the current state and an action and reduces them down to one value to be stored as the new state of the componenet in the application.

What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

HTTP = Hyper Text Transfer Protocol = a set of rules for communication
CRUD =  Create 	- POST
		Read 	- GET
		Update  - PUT
		Delete  - DELETE