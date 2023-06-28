const express = require('express');

const app = express();

app.get('/', (clientRequestObject, serverResponseObject) => {
    serverResponseObject.send('Hello there!');
});

// Hello from the about route

app.get('/about', (clientRequestObject, serverResponseObject) => {
    serverResponseObject.send('Hello from the about route');
});

app.listen(3333, () => console.log('Server started on port 3333'));