const connection = require('./conecction');

const getAllTask = async () => {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

module.exports = { getAllTask };