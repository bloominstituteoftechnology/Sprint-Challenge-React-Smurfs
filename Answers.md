1.  Redux's Single Source of Truth means that the state of the whole application is stored in an object tree within a single store.  React state is stored locally within a component and when it needs to be shared with other components, it is passed down through props. So, the top-most component in your app needing access to a mutable value will hold that value in its state.  You must pass a callback to handle the change into subcomponents.
2. An action holds payloads in plain javascript objects.  They must have a type of property that indicates the performed action, typically defined as string constants.  All other properties are the actions payload.
3.  A reducer takes the previous state and an action and returns the next state.
4. HTTP is hypertext transfer protocol.  CRUD means create, read, update and delete.  Here are the {CRUD : HTTP} methods, {Create : POST} {Read : GET} {Update : PUT with an existing URI} {Delete : DELETE}

 