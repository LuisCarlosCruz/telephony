const connection = require('./connection');

const getAllDDD = async () => {
    const [DDD] = await connection.execute(`SELECT * FROM DDD;`);
    console.log(DDD);
    return DDD;
};

const getPlans = async () => {
  try {
    const [row] = await connection.execute(`SELECT * FROM plans;`);
    return row;
  } catch (err) {
    console.log(`Error: ${err.message}`);
    return null;
  }
};

const callValue = async (origin, destination, plan) => {
    const [id_origin] = await connection.execute(
  `SELECT id_DDD FROM DDD WHERE code_DDD = ?`, [origin]);
    const idOrigin = id_origin[0].id_DDD;
  
    const [id_destination] = await connection.execute(
  `SELECT id_DDD FROM DDD WHERE code_DDD = ?`, [destination]);
    const idDestination = id_destination[0].id_DDD;
  
    const [id_call] = await connection.execute(
  `SELECT * FROM calls WHERE origin_id_DDD = ? AND destination_id_DDD = ?`, [idOrigin, idDestination]);
  
    const [plan_name] = await connection.execute(`SELECT * FROM plans WHERE plan_name = ?`, [plan]);

    // console.log([id_call[0], plan_name[0]]);
    return [id_call[0], plan_name[0]];
};








module.exports = { getAllDDD, getPlans, callValue };