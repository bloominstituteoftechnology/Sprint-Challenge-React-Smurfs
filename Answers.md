1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?
**Ans** In Redux the state stays in store and store only as an object tree. So it is easier to debug an application. 
The state in the store is read only. However in React the state stays in individual *class* components. So there are multiple states in React.

2. Describe what an _Action_ is/does.
**Ans** An action is what can be performed on application and its components. It spits out a payload object that is  the only way to change the state in a redux store.
3. Describe what a _Reducer_ is/does.
**Ans** Reducers are *pure functions* that take in payload from actions and  are use it to change the state of a redux store.
4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
**Ans** HTTP- Hyper Text Transfer Protocol
CRUD - Create, Read, Update, Delete 
HTTP Methods  CRUD Maps 
GET            READ
POST           CREATE 
PUT            UPDATE
DELETE         DELETE     
