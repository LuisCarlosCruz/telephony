const express = require('express');
const { body, validationResult, param, query } = require('express-validator');
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());

const { err } = require('./middlewares/errMiddleware');
const { getDDD, getPlans, callValue, callPossible } = require('./controllers/callsController');

app.get('/DDD/:id', callPossible);

app.get('/DDD', getDDD);

app.get('/plans', getPlans);

// ================= VALIDACAO PARAMS ===================
validationRules = [
  query('origin').exists().isIn([11, 16, 17, 18]).withMessage('source value invalid'),
  query('destination')
    .exists().isIn([11, 16, 17, 18]).withMessage('invalid target value'),
  query('plan')
    .exists().isString().isIn(['FaleMais30', 'FaleMais60', 'FaleMais120']).withMessage('invalid plan'),
  query('time')
    .exists().isNumeric().withMessage('must be a number'),
];

checkRules = (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) return res.status(400).json({ message: err.array()});
  next();
}

app.get('/callvalue/calls', validationRules, checkRules,  callValue);

app.use(err);

app.listen(PORT, () => {
  console.log(`App na porta http://localhost:${PORT}`);
});
