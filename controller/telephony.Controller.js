const { StatusCodes } = require('http-status-codes')
const validateBody = require('../service/validateBody.Service')

const { valueCall } = require("../service/telephony.Service");

const getValueCall = async (req, res, next) => {
  const { origin, destination, plan, time } = req.body;

  const body = await validateBody(origin, destination, plan, time);

  body !== true && next({ status: StatusCodes.BAD_REQUEST , message: `invalid ${body}` });

  try {
    // const value = await valueCall();
    res.status(200).json('PASSOU');
    next();
  } catch (err) {
    console.log(`Error Controller : ${err}`);
    return next(err);
  }
};

module.exports = { getValueCall };