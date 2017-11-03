Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?
Redux relies on one directional flow. There has to be a single process for adding and removing things from the state. React state is stored locally with component and passed down through props. In redux, state is stored globally. any componenet needing access to a value has to subscribe to that store. In react a similar situation would call for a call back function in subcomponents. in redux that value can be extracted without involving subcomponents in the picture.
Describe what an Action is/does.
Actions send information from an application to the store. Actions are JS objects and must have a type proprty to describe a type of an action that is being persormed.
They are invoked by using command store.disptch()
Describe what a Reducer is/does.
Actions describe what has happened but do not state how the state has changed due to that action.
What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
HTTPS stands for Hypertext Transfer Protocol. The acronym, which stands for Create, Retrieve, Update, Delete, is a very important part of computer programming that is a basic function of any computer database or a program with persistent storage.Put and Post can both be used to map to the CRUD.