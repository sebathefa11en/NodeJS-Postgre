const { Router } = require('express');
const { getAllTasks,
        getTasks,
        createTasks,
        updateTasks,
        deleteTasks 
    } = require('../controllers/tasks.controllers');

const router = Router();

router.get('/tasks', getAllTasks);

router.get('/task/:id', getTasks);

router.post('/tasks', createTasks);

router.delete('/task/:id', deleteTasks);

router.put('/task/:id', updateTasks);

module.exports = router;