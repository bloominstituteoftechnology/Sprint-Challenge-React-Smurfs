### Question 1=>
Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?

### Answer 1=>
It means only single copy of state (store) exists which make it easier to serialize and hydrate state from server to client.

### Question 2=>
Describe what an Action is/does.

### Answer 2=>
Action is plain object which represents an intent to change state. Action must have type which describes purpose of the action in plain english.

### Question 3=>
Describe what a Reducer is/does.

### Answer 3=>
Reducer is function which receives previous state and changes it to new state by performing some action.

### Question 4=>
What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

### Answer 4=>
1. HTTP stands for HyperTextTransferProtocol.
2. CRUD stands for Create, Read, Update, Delete
3. Four HTTP methods mapped to CRUD acronym are POST, GET, PUT and DELETE respectively.