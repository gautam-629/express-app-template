import express from 'express';

let app = express();

app.use('/', (req, res) => {
  res.send('Welcome to the Express app');
});

export default app;
