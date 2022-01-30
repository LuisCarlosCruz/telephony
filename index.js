const express = require('express');
const app = express();
var cors = require('cors')
const PORT = 3001;
app.use(express.json());
app.use(cors());

const { err } = require('./middlewares/errMiddleware');
const { getDDD, getPlans, callValue } = require('./controllers/callsController');
//
const { body, validationResult } = require('express-validator');
// const { checkRules, validationBodyRules } = require('./middlewares/validateBodyMiddleware');

app.use('/DDD', getDDD);

app.use('/plans', getPlans);

// ================= VALIDACAO BODY ===================
validationBodyRules = [
  body('origin')
    .exists().isIn([11, 16, 17, 18]).withMessage('source value invalid'),
  body('destination')
    .exists().isIn([11, 16, 17, 18]).withMessage('invalid target value'),
  body('plan')
    .exists().isString().isIn(['FaleMais30', 'FaleMais60', 'FaleMais120']).withMessage('invalid plan'),
  body('time')
    .exists().isNumeric().withMessage('must be a number'),
];

checkRules = (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) return res.status(400).json({ message: err.array()});
  next();
}
// =====================================================

app.use('/callvalue', validationBodyRules, checkRules,  callValue);

app.use(err);

app.listen(PORT, () => {
  console.log(`App na porta http://localhost:${PORT}`);
});
