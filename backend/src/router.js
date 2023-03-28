const express = require('express');
const router = express.Router();
const tasksController = require('./controllers/tasksController');
const { validateTitleToPostTasks, validateStatusToPostTasks, validateIdToPostTasks, validateParamIdToDeleteTasks } = require('./middlewares/tasksMiddleware');

router.get('/tasks', tasksController.getAllTask);
router.post('/tasks',validateTitleToPostTasks, tasksController.postTask);
router.delete('/tasks',validateParamIdToDeleteTasks, tasksController.deleteTask);
router.put('/tasks',validateIdToPostTasks, validateTitleToPostTasks, validateStatusToPostTasks, tasksController.updateTask);

module.exports = router;