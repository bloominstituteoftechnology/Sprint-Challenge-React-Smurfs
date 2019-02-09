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
    name: 'Brainey Smurf',
    age: 200,
    height: '8cm'
  },
  {
    id: 1,
    name: 'Papa',
    age: 12,
    height: '11cm',
},
{
    id: 2,
    name: 'Actor',
    age: 45,
    height: '24cm',
},
{
    id: 3,
    name: 'Alchemist',
    age: 345,
    height: '63cm',
},
{
    id: 4,
    name: 'Archeologist',
    age: 77,
    height: '23cm',
},
{
    id: 5,
    name: 'Architect',
    age: 12,
    height: '25cm',
},
{
    id: 6,
    name: 'Astro',
    age: 23,
    height: '62cm',
},
{
    id: 7,
    name: 'Baby',
    age: 47,
    height: '22cm',
},
{
    id: 8,
    name: 'Baker',
    age: 36,
    height: '162cm',
},
{
    id: 9,
    name: 'Barber',
    age: 23,
    height: '15cm',
},
{
    id: 10,
    name: 'Blacksmith',
    age: 40,
    height: '12cm',
},
{
    id: 11,
    name: 'Brainy',
    age: 40,
    height: '12cm',
},
{
    id: 12,
    name: 'Camper',
    age: 40,
    height: '12cm',
},
{
    id: 13,
    name: 'Carpenter',
    age: 40,
    height: '12cm',
},
{
    id: 14,
    name: 'Chef',
    age: 40,
    height: '12cm',
},
{
    id: 15,
    name: 'Clockwork',
    age: 40,
    height: '12cm',
},
{
    id: 16,
    name: 'Clockwork Smurfette',
    age: 40,
    height: '12cm',
},
{
    id: 17,
    name: 'Clueless',
    age: 40,
    height: '12cm',
},
{
    id: 18,
    name: 'Clumsy',
    age: 40,
    height: '12cm',
},
{
    id: 19,
    name: 'Coalminer',
    age: 40,
    height: '12cm',
},
{
    id: 20,
    name: 'Cobbler',
    age: 40,
    height: '12cm',
},
{
    id: 21,
    name: 'Complimentary',
    age: 40,
    height: '12cm',
},
{
    id: 22,
    name: 'Crazy',
    age: 40,
    height: '12cm',
},
{
    id: 23,
    name: 'Dabbler',
    age: 40,
    height: '12cm',
},
{
    id: 24,
    name: 'Disabled',
    age: 40,
    height: '12cm',
},
{
    id: 25,
    name: 'Doctor',
    age: 40,
    height: '12cm',
},
{
    id: 26,
    name: 'Dopey',
    age: 40,
    height: '12cm',
},
{
    id: 27,
    name: 'Dreamy',
    age: 40,
    height: '12cm',
},
{
    id: 28,
    name: 'Drummer',
    age: 40,
    height: '12cm',
},
{
    id: 29,
    name: 'Editor',
    age: 40,
    height: '12cm',
},
{
    id: 30,
    name: 'Enamored',
    age: 40,
    height: '12cm',
},
{
    id: 31,
    name: 'Equilibrist',
    age: 40,
    height: '12cm',
},
{
    id: 32,
    name: 'Explorer',
    age: 40,
    height: '12cm',
},
{
    id: 33,
    name: 'Fakir',
    age: 40,
    height: '12cm',
},
{
    id: 34,
    name: 'Farmer',
    age: 40,
    height: '12cm',
},
{
    id: 35,
    name: 'Finance',
    age: 40,
    height: '12cm',
},
{
    id: 36,
    name: 'Fisher',
    age: 40,
    height: '12cm',
},
{
    id: 37,
    name: 'Flighty',
    age: 40,
    height: '12cm',
},
{
    id: 38,
    name: 'Flying',
    age: 40,
    height: '12cm',
},
{
    id: 39,
    name: 'Grandpa',
    age: 40,
    height: '12cm',
},
{
    id: 40,
    name: 'Greedy',
    age: 40,
    height: '12cm',
},
{
    id: 41,
    name: 'Grouchy',
    age: 40,
    height: '12cm',
},
{
    id: 42,
    name: 'Gutsy',
    age: 40,
    height: '12cm',
},
{
    id: 43,
    name: 'Gullible',
    age: 40,
    height: '12cm',
},
{
    id: 44,
    name: 'Hackus',
    age: 40,
    height: '12cm',
},
{
    id: 45,
    name: 'Handy',
    age: 40,
    height: '12cm',
},
{
    id: 46,
    name: 'Harmony',
    age: 40,
    height: '12cm',
},
{
    id: 47,
    name: 'Hefty',
    age: 40,
    height: '12cm',
},
{
    id: 48,
    name: 'Hunter',
    age: 40,
    height: '12cm',
},
{
    id: 49,
    name: 'Jokey',
    age: 40,
    height: '12cm',
},
{
    id: 50,
    name: 'Karate',
    age: 40,
    height: '12cm',
},
{
    id: 51,
    name: 'King',
    age: 40,
    height: '12cm',
},
{
    id: 52,
    name: 'Lazy',
    age: 40,
    height: '12cm',
},
{
    id: 53,
    name: 'Liar',
    age: 40,
    height: '12cm',
},
{
    id: 54,
    name: 'Loser',
    age: 40,
    height: '12cm',
},
{
    id: 55,
    name: 'Lucky',
    age: 40,
    height: '12cm',
},
{
    id: 56,
    name: 'Marco',
    age: 40,
    height: '12cm',
},
{
    id: 57,
    name: 'Magician',
    age: 40,
    height: '12cm',
},
{
    id: 58,
    name: 'Miller',
    age: 40,
    height: '12cm',
},
{
    id: 59,
    name: 'Mime',
    age: 40,
    height: '12cm',
},
{
    id: 60,
    name: 'Miner',
    age: 40,
    height: '12cm',
},
{
    id: 61,
    name: 'Nanny',
    age: 40,
    height: '12cm',
},
{
    id: 62,
    name: 'Narrator',
    age: 40,
    height: '12cm',
},
{
    id: 63,
    name: 'Natural',
    age: 40,
    height: '12cm',
},
{
    id: 64,
    name: 'Nobody',
    age: 40,
    height: '12cm',
},
{
    id: 65,
    name: 'Nosey',
    age: 40,
    height: '12cm',
},
{
    id: 66,
    name: 'Nurse',
    age: 40,
    height: '12cm',
},
{
    id: 67,
    name: 'Owner',
    age: 40,
    height: '12cm',
},
{
    id: 68,
    name: 'Painter',
    age: 40,
    height: '12cm',
},
{
    id: 69,
    name: 'Paleontologist',
    age: 40,
    height: '12cm',
},
{
    id: 70,
    name: 'Panicky',
    age: 40,
    height: '12cm',
},
{
    id: 71,
    name: 'Party Planner',
    age: 40,
    height: '12cm',
},
{
    id: 72,
    name: 'Passive Aggressive',
    age: 40,
    height: '12cm',
},
{
    id: 73,
    name: 'Passerby',
    age: 40,
    height: '12cm',
},
{
    id: 74,
    name: 'Patient',
    age: 40,
    height: '12cm',
},
{
    id: 75,
    name: 'Poet',
    age: 40,
    height: '12cm',
},
{
    id: 76,
    name: 'Policeman',
    age: 40,
    height: '12cm',
},
{
    id: 77,
    name: 'Postman',
    age: 40,
    height: '12cm',
},
{
    id: 78,
    name: 'Potter',
    age: 40,
    height: '12cm',
},
{
    id: 79,
    name: 'Pushover',
    age: 40,
    height: '12cm',
},
{
    id: 80,
    name: 'Reporter',
    age: 40,
    height: '12cm',
},
{
    id: 81,
    name: 'Reveler',
    age: 40,
    height: '12cm',
},
{
    id: 82,
    name: 'Sassette Smurfling',
    age: 40,
    height: '12cm',
},
{
    id: 83,
    name: 'Scaredy',
    age: 40,
    height: '12cm',
},
{
    id: 84,
    name: 'Schemer',
    age: 40,
    height: '12cm',
},
{
    id: 85,
    name: 'Scuba',
    age: 40,
    height: '12cm',
},
{
    id: 86,
    name: 'Sculptor',
    age: 40,
    height: '12cm',
},
{
    id: 87,
    name: 'Showoff',
    age: 40,
    height: '12cm',
},
{
    id: 88,
    name: 'Sickly',
    age: 40,
    height: '12cm',
},
{
    id: 89,
    name: 'Sloppy',
    age: 40,
    height: '12cm',
},
{
    id: 90,
    name: 'Slouchy',
    age: 40,
    height: '12cm',
},
{
    id: 91,
    name: 'Smurfblossom',
    age: 40,
    height: '12cm',
},
{
    id: 92,
    name: 'Smurfclover',
    age: 40,
    height: '12cm',
},
{
    id: 93,
    name: 'Smurfdaisy',
    age: 40,
    height: '12cm',
},
{
    id: 94,
    name: 'Smurfette',
    age: 40,
    height: '12cm',
},
{
    id: 95,
    name: 'Smurfettes',
    age: 40,
    height: '12cm',
},
{
    id: 96,
    name: 'Smurfjade',
    age: 40,
    height: '12cm',
},
{
    id: 97,
    name: 'Smurflily',
    age: 40,
    height: '12cm',
},
{
    id: 98,
    name: 'Smurfmelody',
    age: 40,
    height: '12cm',
},
{
    id: 99,
    name: 'Smurfpetal',
    age: 40,
    height: '12cm',
},
{
    id: 100,
    name: 'Smurfstorm',
    age: 40,
    height: '12cm',
},
{
    id: 101,
    name: 'Smurfwillow	',
    age: 40,
    height: '12cm',
},
{
    id: 102,
    name: 'Smooth',
    age: 40,
    height: '12cm',
},
{
    id: 103,
    name: 'Snappy',
    age: 40,
    height: '12cm',
},
{
    id: 104,
    name: 'Social',
    age: 40,
    height: '12cm',
},
{
    id: 105,
    name: 'Southy',
    age: 40,
    height: '12cm',
},
{
    id: 106,
    name: 'Suspicious',
    age: 40,
    height: '12cm',
},
{
    id: 107,
    name: 'Sweepy',
    age: 40,
    height: '12cm',
},
{
    id: 108,
    name: 'Tailor',
    age: 40,
    height: '12cm',
},
{
    id: 109,
    name: 'Table Eating',
    age: 40,
    height: '12cm',
},
{
    id: 110,
    name: 'Timber',
    age: 40,
    height: '12cm',
},
{
    id: 111,
    name: 'Tracker',
    age: 40,
    height: '12cm',
},
{
    id: 112,
    name: 'Traveling',
    age: 40,
    height: '12cm',
},
{
    id: 113,
    name: 'Tuffy',
    age: 40,
    height: '12cm',
},
{
    id: 114,
    name: 'Vanity',
    age: 40,
    height: '12cm',
},
{
    id: 115,
    name: 'Vexy',
    age: 40,
    height: '12cm',
},
{
    id: 116,
    name: 'Weakling',
    age: 40,
    height: '12cm',
},
{
    id: 117,
    name: 'Weather',
    age: 40,
    height: '12cm',
},
{
    id: 118,
    name: 'Weepy',
    age: 40,
    height: '12cm',
},
{
    id: 119,
    name: 'Wild',
    age: 40,
    height: '12cm',
},
{
    id: 120,
    name: 'Winner',
    age: 40,
    height: '12cm',
},
{
    id: 121,
    name: 'Wooly',
    age: 40,
    height: '12cm',
},
{
    id: 122,
    name: 'Hundredth',
    age: 40,
    height: '12cm',
},
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
