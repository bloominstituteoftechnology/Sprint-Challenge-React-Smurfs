1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?
2. Describe what an _Action_ is/does.
3. Describe what a _Reducer_ is/does.
4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

1. A single source of truth is a general computer science concept where the value of something is stored only in
one place not multiple places. The advantage of this is that is the value changes anything that needs to know this value will always have the correct value . If the value was stored in several places with several pieces of code using it's value, you would need to make sure that any changes to the value were manually changed to the correct value at the same time. This is difficult and easy to forget leading to bugs and harder to maintain code.
Redux application state is application global state. Through one or more reducers the application state is created and maintained on a global object. There are a few main advantages of maintaining state in a global object.
Different components can subscribe to to various parts of the application state vie mapStateToProps, there is no need to send props down from a component in react or setup your state in the component. If Several components need to know of a particular state change it is easy to wire them up and if an event changes several pieces of state the action  is sent to all the reducers so you can update the state on several reducers at once based on type in a switch statement. Redux also offers time travel debugging which is great for playback of each event -> state values and gui view of the whole system. This is a godsend for people used to stacks like c and java where state is continuously mutated to it's final state making it next to impossible to easily trace back through system events and their outcomes

2. In Redux we modify state by sending actions to reducers which assemble this state in a global object. Application events such as clicks, submits, timers, api updates can be wired up to trigger action creators which will send these actions to all reducers. Actions are objects that contain an action type and payload. The type is used to match the reducer and update the state via the action payload.

3. A reducer receives the actions and depending on the action type it will update state or just ignore the action. It's important to copy the old state when creating the new state so that we can always go back and iterate through the state changes.

4. Http stand for hypertext transfer protocol. Crud stands for create/read/update/delete and the corresponding methods used to interface to the api servers are post/get/put/delete
