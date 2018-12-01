const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    id: 1,
    name: 'Papa Smurf',
    age: 5271,
    height: '10cm'
  },
  {
    id: 2,
    name: 'Brainy Smurf',
    age: 211,
    height: '8cm'
  },
  {
    id: 3,
    name: 'Sleepy Smurf',
    age: 323,
    height: '5cm'
  },
  {
    id: 4,
    name: 'Smurfette',
    age: 122,
    height: '7cm'
  },
  {
    id: 5,
    name: 'Grouchy Smurf',
    age: 200,
    height: '8cm'
  },
  {
    id: 6,
    name: 'Sassette Smurfling',
    age: 178,
    height: '6cm'
  },
  {
    id: 7,
    name: 'Hefty Smurf',
    age: 121,
    height: '7cm'
  },
  {
    id: 8,
    name: 'Actor Smurf',
    age: 138,
    height: '6cm'
  },
  {
    id: 9,
    name: 'Alchemist Smurf',
    age: 932,
    height: '4cm'
  },
  {
    id: 10,
    name: 'Angel Smurf',
    age: 423,
    height: '9cm'
  },
  {
    id: 11,
    name: 'Architect Smurf',
    age: 153,
    height: '7cm'
  },
  {
    id: 12,
    name: 'Baker Smurf',
    age: 212,
    height: '6cm'
  },
  {
    id: 13,
    name: 'Blacksmith Smurf',
    age: 483,
    height: '8cm'
  },
  {
    id: 14,
    name: 'Builder Smurf',
    age: 112,
    height: '12cm'
  },
  {
    id: 15,
    name: 'Chef Smurf',
    age: 235,
    height: '6cm'
  },
  {
    id: 16,
    name: 'Clumsy Smurf',
    age: 110,
    height: '6cm'
  },
  {
    id: 17,
    name: 'Cousin Smurfs',
    age: 327,
    height: '9cm'
  },
  {
    id: 18,
    name: 'Doctor Smurf',
    age: 483,
    height: '6cm'
  },
  {
    id: 19,
    name: 'Farmer Smurf',
    age: 163,
    height: '8cm'
  },
  {
    id: 20,
    name: 'Grandpa Smurf',
    age: 24173,
    height: '4cm'
  }
];
server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = 1;

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

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
