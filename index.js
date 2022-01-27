const express = require('express');
const app = express();
const PORT = 3001;

const { getValueCall } = require('./controller/telephony.Controller');

app.use(express.json());

app.use('/', getValueCall);


app.use((err, _req, res, _next) => {
  console.log(err.message);

  if(err.status) res.status(err.status).json(err.message);

  res.status(500).json({ message: 'Interal Error Server' });
});


app.listen(PORT, () => {
  console.log('App na porta http://localhost:3001');
});
