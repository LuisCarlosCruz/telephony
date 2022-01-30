const { StatusCodes } = require('http-status-codes');
const callsService = require('../service/callsService');

const getDDD = async (_req, res, next) => {
  try {
    const DDD = await callsService.getAllDDD();
    if (DDD !== null) return res.status(StatusCodes.OK).json(DDD);
  } catch (err) {
    return next({ status: StatusCodes.NOT_FOUND , message: `Error: ${err.message}` });
  }
};

const getPlans = async (_req, res, next) => {
  try {
    const plans = await callsService.getPlans();
    if (plans !== null) return res.status(StatusCodes.OK).json(plans);
  } catch (err) {
    return next({ status: StatusCodes.NOT_FOUND , message: `Error` });
  }
};

// =====================================================================



const callValue = async (req, res, next) => {
  try {
    const { origin, dest, plan, time } = req.params;
    console.log(origin, dest, plan, time);

    // console.log(bodyJson);

    // const body = await callsService.callValue(bodyJson);

    // console.log(body, 'CONTROLLER');
    

    next();
  } catch (err) {
    return next({ status: StatusCodes.NO_CONTENT , message: `Error: ${err}` })
  }
};

module.exports = { getDDD, getPlans, callValue };