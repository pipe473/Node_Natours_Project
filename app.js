const express = require('express');

const app = express();

// Send get methods from server, depending status

// app.get('/', (req, res) => {
//     res.status(200)
//     //.send('Hello from the server side!');
//     .json({message: 'Hello from the server side!', app:'Natours' });
// });

// app.post('/', (req, res) => {
//     res.send('You can post to endpoint...');
// });

app.get('/api/v1/tours', (req, res) => {
    
})

// Listening port
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);    
});