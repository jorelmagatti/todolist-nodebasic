const tasksServices = require('../services/taskServices');

const getAllTask = async (_req, res) => await tasksServices.getAllTask(_req, res);

const postTask = async (req, res) => await tasksServices.postTask(req, res);

const deleteTask = async (req, res) => await tasksServices.deleteTask(req, res);

const updateTask = async (req, res) => await tasksServices.updateTask(req, res);

module.exports = {
  getAllTask,
  postTask,
  deleteTask,
  updateTask
};
