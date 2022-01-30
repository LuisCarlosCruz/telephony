const { body, validationResult } = require('express-validator');

validationBodyRules = [
  body('email').isEmail(),
  body('password').isLength({min: 5})
];

checkRules = (req, res, next) => {
  //
  const err = validationResult(req);
  if (!err.isEmpty()) return res.status(400).json({ message: err.array()});
  // console.log('luis');
  next();
}

module.exports = { checkRules, validationResult };