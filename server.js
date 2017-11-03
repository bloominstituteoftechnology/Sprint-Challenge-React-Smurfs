const express = require('express');
const bodyParser = require('body-parser');
const port = 3333;

const server = express();
server.use(bodyParser.json());
const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

const smurfs = [];
// example of a smurf object;
// { name: 'Brainy', height: '3cm', age: 300, id: 0 }
server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = 0;

server.post('/smurfs', (req, res) => {
  const { name, age, height } = req.body;
  const newSmurf = { name, age, height, id: smurfId };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});
server.update();
server.delete(() => {});
server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
