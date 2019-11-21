const express = require('express');

const app = express();

// Send status from server side

app.get('/', (req, res) => {
    res.status(200)
    //.send('Hello from the server side!');
    .json({message: 'Hello from the server side!', app:'Natours' });
});

// Listening port
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);    
});