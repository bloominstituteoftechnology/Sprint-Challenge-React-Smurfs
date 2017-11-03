Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?
  Redux allows children to update the state easily.

Describe what an Action is/does.
  Actions are plain JavaScript objects with a type and payload property. They send data from your application to your store.

Describe what a Reducer is/does.
  Reducers are a switch statement that specify how the application's state changes in response to actions.

What does HTTP stand for?
  HyperText Transfer Protocol

What does CRUD stand for? 
  const CRUD = { // This may bring up a discussion of acronymic seperation to distinguish between SCREAMING_SNAKE_CASE.
    Create: Post,
    Read: Get,
    Update: Put,
    Delete,
  };
Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
  Post = 'creates new subordinate resources.';
  Get = 'retrieves a representation of the desired resource.';
  Put = 'updates a known resource with a request to display the updated resource.';
  Delete = 'deletes the inputed resource.';