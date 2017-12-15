# 1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?
In simple terms, the single source of truth is the state treem that hasn't been rewritten or reshaped. It gives us the availability to easily retrieve information in constant time and maintain a clean structure for the state  of our application. The reducers serve as gate keepers to the source of truth. 

# 2. Describe what an _Action_ is/does.
* Action attribute specifies where to send the form-data when a form is submitted.

# 3. Describe what a _Reducer_ is/does.
* Actions descride the face that something happened. but they don't specify how the application's state changes in response. This is the job of the Reducer

# 4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
* HTTP stands for Hyper Text Transfer Protocol
* CRUD stands for Create, Read, Update, Delete
*  the four HTTP methods that can be mapped to the crud acronym are, Post, Get, Put, Patch.