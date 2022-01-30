const callsModel = require('../models/callModel');

const getAllDDD = async () => {
    const DDD = await callsModel.getAllDDD();
    return DDD;
};

const getPlans = async () => {
  const plans = await callsModel.getPlans();
  return plans;
};

const callValue = async (origin, destination, plan) => {
    const res = await callsModel.callValue(origin, destination);

    const typeplan = await callsModel.selectPlan(plan);

    return [ { callPrices: res[0], selectPlan: typeplan[0] } ];
};

module.exports = {  getAllDDD, getPlans, callValue };
