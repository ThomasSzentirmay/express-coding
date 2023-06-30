const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));

// LOAD ROUTES

// Post route to retrieve the form data
app.post('/notes', (clientReq, serverRes) => {
  console.log(clientReq.body);
});


app.listen(3333, () => console.log('Server started on port 3333.'));