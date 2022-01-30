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

const callValue = async (req, res, next) => {
  try {
    const { origin, destination, plan, time } = req.query;

    const [body] = await callsService.callValue(origin, destination, plan);
    const { callPrices, selectPlan } = body;

    if(callPrices === undefined || callPrices === undefined) {
      return res.status(StatusCodes.NO_CONTENT).json({ message: 'NO_CONTENT'});
    }

    return res.status(StatusCodes.OK).json(body);
  } catch (err) {
    return next({ status: StatusCodes.NO_CONTENT , message: `Error: ${err}` });
  }
};

const callPossible = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    const [callPossible] = await callsService.callPossible(id);
    return res.status(StatusCodes.OK).json(callPossible);

  } catch (err) {
    return next({ status: StatusCodes.NO_CONTENT , message: `Error: ${err}` });
  }
}

module.exports = { getDDD, getPlans, callValue, callPossible };
