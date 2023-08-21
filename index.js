import express from "express";
const app = express();
const port = 4015;

app.use(express.json());

// let passengerQueueCount = 0;
// let taxiQueueCount = 0;

// GET endpoint to fetch the queue counts
app.get('/api/queues', (req, res) => {
  res.send({ passengerQueueCount, taxiQueueCount });
});

// POST endpoint to add to the people queue
app.post('/api/queues/passenger/add', (req, res) => {
  passengerQueueCount++;
  res.sendStatus(200);
});

// POST endpoint to remove from the people queue
app.post('/api/queues/passenger/remove', (req, res) => {
  if (passengerQueueCount > 0) {
    passengerQueueCount--;
  }
  res.sendStatus(200);
});

// POST endpoint to add to the taxi queue
app.post('/api/queues/taxi/add', (req, res) => {
  taxiQueueCount++;
  res.sendStatus(200);
});

// POST endpoint to remove from the taxi queue
app.post('/api/queues/taxi/remove', (req, res) => {
  if (taxiQueueCount > 0 && passengerQueueCount >= 12) {
    taxiQueueCount--;
    passengerQueueCount -= 12;
  }
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// ```








// import express from "express";

 //use the SQL methods in the API routes below
// import {joinQueue} from './taxi.sql.js';

// const app = express();

// app.use(express.static('public'))

// // add middleware to make post routes work
// app.use(express.json());

// const PORT = process.env.PORT || 4015;

// // passenger joins the queue
// app.post('/api/passenger/join', (req, res) => {
//     res.json({
//         message : 'join queue'
//     })
// })

// // passenger leaves the queue
// app.post('/api/passenger/leave', (req, res) => {
//     res.json({
//         message : 'leave queue'
//     })
// });

// app.post('/api/taxi/join', (req, res) => {
//     res.json({
//         message : 'leave queue'
//     })
// });

// // Note there needs to be at least 12 people in the queue for the taxi to depart
// app.post('/api/taxi/depart', (req, res) => {
//     res.json({
//         message : 'taxi depart from queue'
//     })
// });


// // return the number of people in the queue
// app.get('/api/passenger/queue', (req, res) => {
//     //  return test the API call
//     res.json({
//         queueCount : 7
//     })
// });

// // return the number of taxis in the queue
// app.get('/api/taxi/queue', (req, res) => {
//     res.json({
//         queueCount : 0
//     })
// });

// app.listen(PORT, () => console.log(`Taxi App started on port: ${PORT}`))

