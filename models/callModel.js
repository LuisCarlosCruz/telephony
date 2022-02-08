const connection = require('./connection');

const getAllDDD = async () => {
    const [DDD] = await connection.execute(`SELECT * FROM telephony.DDD;`);
    return DDD;
};

const getPlans = async () => {
  const [row] = await connection.execute(`SELECT * FROM telephony.plans;`);
  return row;
};

const callValue = async (origin, destination) => {

  const [call] = await connection.execute(`
SELECT * 
FROM fixed_price
WHERE origin_id_DDD = (SELECT id_DDD FROM DDD WHERE code_DDD = ?)
AND destination_id_DDD = (SELECT id_DDD FROM DDD WHERE code_DDD = ?)`, [origin, destination]);
  return call;
};

const selectPlan = async (plan) => {
  const [typePlan] = await connection.execute(`SELECT * FROM plans WHERE plan_name = ? `, [plan]);
  return typePlan;
};

const callPossible = async (id) => {

  const call = await connection.execute(`
SELECT destination_id_DDD
FROM fixed_price
WHERE origin_id_DDD = (SELECT id_DDD FROM DDD WHERE code_DDD = ?)`, [id]);
  return call;
}

module.exports = { getAllDDD, getPlans,  callValue, selectPlan, callPossible };
