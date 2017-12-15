## Sprint Challenge (Anwers)

### 1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?
Answer: In React, each Component has its own State (an object where component related variables are stored).
Redux make it easy to manage States of all React Components by merging into one Source called Store.

### 2. Describe what an Action is/does.
Answer: Actions are informations send from application to it's store. This information includes action.type and action.payload (data).

### 3. Describe what an Reducer is/does.
Answer: Reducer returns the new state by the instructions set by the actions. The components will be re-rendered after it returns the new state.

### 4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
Answer:
  HTTP - HyperText Transfer Protocol
  CRUD - Create, Read, Update & Delete

  Four HTTP Methods are 
  1. GET - to get resource from the server
  2. POST - to add resource from the server
  3. PUT - to update/modify resource from the server
  4. DELETE - to remove resource from the server