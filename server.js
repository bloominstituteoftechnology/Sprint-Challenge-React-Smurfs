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
    id: 0,
    name: 'Papa Smurf',
    occupation: 'Village leader, wizard',
    img: 'https://vignette.wikia.nocookie.net/smurfs/images/b/bd/Papa_Smurf123.png/revision/latest?cb=20130805130238'
  },
  {
    id: 1,
    name: 'Hefty Smurf',
    occupation: 'Foreman, Strongman, Athlete',
    img: 'https://vignette.wikia.nocookie.net/smurfs/images/3/37/Hefty_Smurf.png/revision/latest?cb=20170414161450'
  },
  {
    id: 2,
    name: 'Vanity Smurf',
    occupation: 'Beautician',
    img: 'https://vignette.wikia.nocookie.net/smurfs/images/8/8e/VanitySmurfPerfume.png/revision/latest?cb=20111119155857'
  },
  {
    id: 3,
    name: 'Jokey Smurf',
    occupation: 'Prankster, comedian',
    img: 'https://vignette.wikia.nocookie.net/smurfs/images/3/3d/Jokeycomics.png/revision/latest?cb=20181010113206'
  }
];
server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = 7;

server.post('/smurfs', (req, res) => {
  console.log(req.body)
  const { name, occupations, img } = req.body;
  const newSmurf = { id: smurfId, name, occupation: occupations, img };
  if (!name || !occupations || !img) {
    return sendUserError(
      'Ya gone did smurfed! Name/occupations/img are all required to create a smurf in the smurf DB.',
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
  const { name, occupations, img } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.occupation = occupation;
    if (height) foundSmurf.img = img;
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
