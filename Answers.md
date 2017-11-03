1. The single source of truth is our state tree, which is not reshaped in any way. It gives us the availability to easily retrieve information in constant time and maintain a clean structure for the state of our app. React state is stored locally within a component. When it is need to be shared with other components, it is passed using props. Redux state is stored globally in the Redux store. And any component that needs asscess to a value can just subcribe to the store.

2. Actions are payloads of information that send data from your application to the store. They are objects and must have a type property that indicates the type of action being performed.

3. The job of the reducer is to specify how the application's state changes in response to an action doing something. A reducer is a pure function that takes the previous state and an action, and returns the next state.

4. Hypertext Tranfer Protocol. Create, Retrieve, Update, Delete. 

Create - you can use PUT with a new url or POST to a base url returning a new url.
Read - you can use GET
Update - you can use PUT with an existing url
DELETE - that will just delete
