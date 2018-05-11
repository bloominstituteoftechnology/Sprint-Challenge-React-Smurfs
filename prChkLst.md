## Sprint Challenge: Routing & Axios
- [x] First, answer the quesstions in answers.md.

### Initialize the Project
- [x]  Fork & Clone, then run `yarn install` in the root directory for the project
- [x] Look at the files for this project. You do not need to create any apps. Take a look at the server.js file to look at the API you'll be interfacing with. (There's also documentation in the readme.)
- [x] Run `yarn start` to start your server on localhost:3333
- [x] Open localhost:3333/smurfs to view the array of smurfs data that your API will return
- [x] Look at your `village` directory and notice that it's just a regular react app. Move into that folder and run `yarn install` to retrieve client code dependencies. Then run `yarn start` to start your React app. You should see an error when you first start.

### Project Steps
- [x] Use Axios to GET a list of Smurfs from the server
- [ ] Implement a POST request to create a new smurf and save it to the database
- [ ] Add React Router to this application

### Stretch Problems
- [ ] Add a DELETE request to remove a smurf from the database
- [ ] Add a PUT request to modify the record for a specific smurf
- [ ] Add a link to each Smurf's name that directs the user to the URL /smurf/:id, where that one smurf is displayed on the page.