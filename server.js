const express = require('express');
const path = require('path');

const app = express();

console.log(__dirname);

const people = [
  {
    id: 1,
    name: 'JD',
    age: 43
  },
  {
    id: 2,
    name: 'Bob',
    age: 99
  }
];


// ROOT/HOME FILE
app.get('/', (clientRequestObject, serverResponseObject) => {
  serverResponseObject.sendFile(path.join(__dirname, 'index.html'));
});

// API DATA
app.get('/api/people', (clientRequestObject, serverResponseObject) => {

  if (!clientRequestObject.query.id) return serverResponseObject.send(people);

  const userObj = people.find(personObj => personObj.id == clientRequestObject.query.id);

  serverResponseObject.send(userObj ? userObj : {
    message: 'User not found',
    error: 404
  });
});

// PARAM PLACEHOLDER
app.get('/api/person/:id', (clientRequestObject, serverResponseObject) => {
  const userObj = people.find(personObj => personObj.id == clientRequestObject.params.id);

  serverResponseObject.send(userObj ? userObj : {
    message: 'User not found',
    error: 404
  });
});

// START SERVER
app.listen(3333, () => console.log('Server started on port 3333.'));