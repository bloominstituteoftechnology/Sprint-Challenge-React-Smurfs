1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?

In Redux state is stored globally and specifics parts are accessed by Redux's container components. This prevents data from being passed around unnecessarily to accomplish the goals intended by a function.
In React the state is stored locally in the specific component; and because it is stored in a container that state is not accessible by any other component unless specifically passed down through props; and not directly accessible by another component.

2. Describe what an _Action_ is/does.

An Action is a function designed to pass a specific piece of state or data when the type is called. The type is typically called by a reducer that is always active; but requires user input to fire.

3. Describe what a _Reducer_ is/does.

A Reducer is function that has a state and is on standby for a trigger to fire. Once the trigger has been fired the reducer then seeks it's action that when called will inject information into it's state, which can then be rendered and displayed for the user.

4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

HTTP = HyperText Transfer Protocol; it's a protocol used to transfer information acrossed the world wide web.
C   Create --- Post --- A method that requests the server to accept a packet of data.
R   Read --- Get --- A method used to retrieve and receive a specific state of information from the server.
U   Update --- Put/Patch ---  A method that is used to send an altered data state to a supplied index.
D   Delete --- Delete --- A method that completely removes the specified resource.
