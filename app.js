const fs = require('fs');
const express = require('express');

const app = express();

//middleware
//app.use(express.json());

// Send get methods from server, depending status

// app.get('/', (req, res) => {
//     res.status(200)
//     //.send('Hello from the server side!');
//     .json({message: 'Hello from the server side!', app:'Natours' });
// });

// app.post('/', (req, res) => {
//     res.send('You can post to endpoint...');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
});

app.post('/api/v1/tours', (req, res) => {
    console.log(req.body);
    res.send('Done');
    
})

// Listening port
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});