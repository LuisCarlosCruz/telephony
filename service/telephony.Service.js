const { getValue } = require('../model/telephonyModel');

const valueCall = async () => {
  try {
    const data = await getValue();
    return data;
  } catch (err) {
    console.log(`Error Service: ${err}`);
  }
}

module.exports = { valueCall };