const express = require('express');
const router = express.Router();
const tasksController = require('./controllers/tasksController');
const { validateBodyToPostTasks, validateParamIdToDeleteTasks } = require('./middlewares/tasksMiddleware');

router.get('/tasks', tasksController.getAllTask);
router.post('/tasks',validateBodyToPostTasks, tasksController.postTask);
router.delete('/tasks',validateParamIdToDeleteTasks, tasksController.deleteTask);
router.put('/tasks',validateBodyToPostTasks, tasksController.updateTask);

module.exports = router;