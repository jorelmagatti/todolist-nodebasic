const tasksModel = require('../models/tasksModel');

const getAllTask = async (req, res) => {
  const tasks = await tasksModel.getAllTask();
  return res.status(200).json(tasks);
};

module.exports = {
  getAllTask
};
