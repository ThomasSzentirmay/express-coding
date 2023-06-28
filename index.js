const express = require('express');

const app = express();

app.get('/', (clientRequestObject, serverResponseObject) => {
    serverResponseObject.send('Hello there!');
});