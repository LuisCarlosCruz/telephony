const callsModel = require('../models/callModel');

const getAllDDD = async () => {
    const DDD = await callsModel.getAllDDD();
    return DDD;
};

const getPlans = async () => {
  const plans = await callsModel.getPlans();
  return plans;
};
// =========================================

// const validateBody = (origin, destination, plan, time) => {
//   if(!origin) return 'origin';
//   if(!destination) return 'destination';
//   if(!plan) return 'plan';
//   if(!time) return 'time';
//   return true;
// };

// const callValue = async ( origin, destination, plan, time) => {
//     const value = await callsModel.callValue(origin, destination, plan)
//     if(!value) return null;

//     // const [call, selectPlan] = value;
//     return value;
// };




module.exports = {  getAllDDD, getPlans };
