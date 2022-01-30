const express = require('express');
const app = express();
const PORT = 3001;
app.use(express.json());

const { err } = require('./middlewares/err.middleware');
const { getDDD, getPlans, callValue } = require('./controllers/callsController');

app.use('/DDD', getDDD);

app.use('/plans', getPlans);

app.use('/', callValue);

app.use(err);

app.listen(PORT, () => {
  console.log(`App na porta http://localhost:${PORT}`);
});
