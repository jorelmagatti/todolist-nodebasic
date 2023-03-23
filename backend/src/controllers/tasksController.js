const tasksModel = require('../models/tasksModel');

const getAllTask = async (_req, res) => {
  const [tasks] = await tasksModel.getAllTask();
  return res.status(200).json(tasks);
};

const postTask = async (req, res) => {
  const tasks = await tasksModel.createTasks(req.body);
  return res.status(201).json(tasks);
};

const deleteTask = async (req, res) => {
  const tasks = await tasksModel.deleteTask(req.query.id);
  return res.status(201).json(tasks);
};

module.exports = {
  getAllTask,
  postTask,
  deleteTask
};
