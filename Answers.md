##Answers

1. So this is pretty cool about redux. In a react component each component has its own state. For one component to share a prop with another component it has to pass it on to a child component. This can quickly become a tangled mess of components trying to keep in sync certain values and re-rendering unnecessarily because of a change of state affectign another component. With redux you can maintain state in the redux store. This means you manage state for all components in one place. You pass on the parts of the redux store that affect the a component and only those parts. It makes it alot cleaner to handle state.
2. an Action is an object sent to the reducer. It usually contains an Action title and some sort of payload. the payload will be the information being passed on to the reducer(s) to manage state.
3. A reducer is a function which takes in an action and a state. it then uses both of those arguments to manipulate state.
4. HTTP: hyper text transfer protocol. CRUD: Create, Read but i call it retrieve, Update, and Delete
