1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?

Answer: Redux state is stored globally in the redux store. Any component that needs the value can subscribe to the store and use that value. 
Whereas the React state is stored in the top level component. If other components want to use the value from that state, the value needs to be passed down to them as props. That top level component is the parent component, and all the components that want to use the value from it will become the children components.

2. Describe what an Action is/does.

Answer: Action is the medium carrying information. And the information will be sent to the redux store by using store.dispatch(). Action is the plain JavaScript object and must have a type property which will be defined as string constants. Other than type, the structure of the action is up to the programmer. The type indicates the type of action being performed. After defining the action, the action creator will create that action and simply return that action. 

3. Describe what a Reducer is/does.

Answer: Reducers specify how the application's state change in response. All the application state is stored as a single object. Reducers are pure function that takes the previous state and an action, and return the next state. You cannot mutate its argument, perform side effects like API calls and routing transitions,and call non-pure functions like Date.now() or Math.random(). 

4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

Answer: HTTP stands for hyper text transfer protocol. CRUD stands for the types of data manipulation which are create, read, update, and delete. 

    |  HTTP  |  CRUD  |
    | ------ | ------ |
    |  GET   |  READ  |
    |  POST  | CREATE |
    |  PUT   | UPDATE |
    