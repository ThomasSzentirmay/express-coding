const express = require('express');
const {Note, getNotes} = require('./models/Note');
// const path = require('path');

const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));

// LOAD ROUTES

// Post route to retrieve the form data
app.post('/notes', (clientReq, serverRes) => {
  const newNote = new Note(clientReq.body.note)

  newNote.save();

  // Respond back to the client to complete the request
  serverRes.redirect('/');
});

app.get('/notes', (clientReq, serverRes) => {
  const notes = getNotes();

  serverRes.send(notes);
})


app.listen(3333, () => console.log('Server started on port 3333.'));