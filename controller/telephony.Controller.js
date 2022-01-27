const validateBody = require('../service/validateBody.Service');

const { valueCall } = require("../service/telephony.Service");

const getValueCall = async (req, res, next) => {
  req.body.length ? null : res.status(400).json({ message: 'Bad Request' });

  const { origin, destination, plan, time } = req.body;

  validateBody.validateOrigin(origin);
  validateBody.validateDestination(destination);
  validateBody.validatePlan(plan);
  validateBody.validateTime(time);

  try {
    const value = await valueCall();
    res.status(200).json(value);
    next();
  } catch (err) {
    console.log(`Error Controller : ${err}`);
    return next(err);
  }
};

module.exports = { getValueCall };