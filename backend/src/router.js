const express = require('express');
const router = express.Router();
const tasksController = require('./controllers/tasksController');

router.get('/tasks', tasksController.getAllTask);
router.post('/tasks', tasksController.postTask);

module.exports = router;