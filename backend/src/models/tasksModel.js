const connection = require('./conecction');

const getAllTask = async () => {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const createTasks = async (task) => {
  const { title } = task;
  const time = new Date(Date.now()).toUTCString();
  const [ createdTasks ] = await connection.execute(`INSERT INTO tasks(title, status, createat) values('${title}', 'pendente', '${time}');`);
  return {insertId: createdTasks.insertId};
};

const deleteTask = async (taskId) => {
  const [ deletedTask ] = await connection.execute(`DELETE FROM tasks WHERE id = ${taskId}`);
  return deletedTask;
};

const updateTasks = async (task) => {
  const { id, title, status,  createat} = task;
  const [ updatedTasks ] = await connection.execute(`UPDATE tasks SET title = '${title}', status = '${status}', createat = '${createat}' WHERE id = ${id}`);
  return {insertId: updatedTasks.insertId};
};
 
module.exports = { getAllTask, createTasks, deleteTask, updateTasks };