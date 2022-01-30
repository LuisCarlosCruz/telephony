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
    const { origin, destination, plan, time } = req.body;
    console.log(origin, destination, plan, time);

    


    next()
    
    // const body = await callsService.validateBody(origin, destination, plan, time);
    
    // body !== true && next({ status: StatusCodes.BAD_REQUEST , message: `invalid ${body}` }); 
    
    // const call = callsService.callValue(origin, destination, plan, time);

    // call === null && next({ status: StatusCodes.SERVICE_UNAVAILABLE, message: `Service Unavailable`})



    // return res.status(StatusCodes.OK).json(call);

  } catch (err) {
    return next({ status: StatusCodes.NO_CONTENT , message: `Error: ${err}` })
  }



};

module.exports = { getDDD, getPlans, callValue };