const connection = require('./conecction');

const getAllTask = async () => {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const createTasks = async (task) => {
  const { title } = task;
  const time = new Date(Date.now()).toUTCString();
  const [ createdTasks ] = await connection.execute(`INSERT INTO tasks(title, status, createat) values('${title}', 'pendente', '${time}');`);
  return createdTasks;
};

module.exports = { getAllTask, createTasks };