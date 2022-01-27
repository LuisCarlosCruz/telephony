const express = require('express');
const app = express();
const PORT = 3001;

const { getValueCall } = require('./controller/telephony.Controller');

app.use(express.json());

app.use('/', getValueCall);

app.listen(PORT, () => {
  console.log('App na porta http://localhost:3001');
});
