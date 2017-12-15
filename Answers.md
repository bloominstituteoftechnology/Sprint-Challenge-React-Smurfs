A "single source of truth" as it relates to redux is referring to the "store". The store is an objec that holds the state. This is contrary to a react componenent which only knows about it's own state and accesses it within itself. If it needs to pass props to a child componeent it does that, but any componenet can have access to the store using the connect method.

An action is an object that contains a type and a payload. When it's dispatch it receives information, then sends that over to the reducer, which based on what action was sent, takes the payload and then updates the state in the store.

The reducer is the componenent that actually updtes the state. It takes the current state from the store, along with what action was sent from the action creator, and then updates the store with the payload data. You must make a new copy of the state and not mutate it in any way.

HTTP - stands for HypterText Transfer Protocol.
Crud - is Create, Read, Update, Delete.

4 HTTP methods that we use to interface and are mapped to CRUD are Post, Get, Put, and Delete. The post method is used to send information to the server and is creating the new data there that is sent. Get is the same as read, and that is used to retrieve data and should not change it in any way, or do anything with any other data. Put is like updateing in that it replaces all current data with new updated data. Delete of course allows you to remove all data of what is sent.
