const pool = require('../db');

const getAllTasks = async(req, res, next) => {
    try{
    const result = await pool.query('SELECT * FROM task');
    res.json(result.rows);
    }catch(error){
        next( error );
    }
}

const getTasks = async(req, res, next) => {
    const { id } = req.params;

    try{
    const result = await pool.query('SELECT * FROM task WHERE id = $1', [id]);

    console.log(result);

    res.json( result.rows );
    }catch(error){
        next( error );
    }
}

const createTasks = async(req, res, next) => {
    const {title, description} = req.body

    try{
    const result = await pool.query('INSERT INTO task(title, description) VALUES($1, $2) RETURNING *', [
        title, 
        description
    ]);

    res.json(result.rows);
    }catch(error){
        next( error );
    }
}

const updateTasks = async(req, res, next) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try{
    const result = await pool.query('UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *', 
        [title, description, id]
    );
    res.json(result.rows);
    }catch(error){
        next( error );
    }
}

const deleteTasks = async(req, res, next) => {
    const { id } = req.params;

    try{
    const result = await pool.query('DELETE FROM task WHERE id = $1 RETURNING *', [id]);
    res.json(result.rows);
    }catch(error){
        next( error );
    }
}

module.exports = {
    getAllTasks,
    getTasks,
    createTasks,
    updateTasks,
    deleteTasks
};