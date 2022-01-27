const connection = require('./connection');

const getValue = async () => {
  try {
    const [row] = await connection.execute(`SELECT * FROM calls;`);
    return row;
  } catch (err) {
    console.log(`Error no model ${err}`);
  }
};


module.exports = { getValue };

