import { pool } from '../db.js'
let tableName = 'tasks'


//GET
export const getTasks = async (req, res)=>{
    const {rows} = await pool.query(`SELECT * FROM ${tableName}`)
    res.json(rows)
}

export const getTaskById = async(req, res)=>{
    const id = req.params.id
    const {rows} = await pool.query(
        `SELECT * FROM ${tableName} WHERE id=${id}`)
    if (rows.length==0){
        return res.status(404).json('User not found')
    }
    res.json(rows[0])
}

//POST
export const createTask = async (req, res)=>{
    const data = req.body
    const {rows} = await pool.query (
        `INSERT INTO ${tableName} 
        (name, completed) 
        VALUES ($1, $2) RETURNING *`,
        Object.values(data)
    )
    res.json(rows)
}

//PUT
export const updateTask = async (req, res)=>{
    const data = req.body
    const {id} = req.params
    const {rows} = await pool.query (
        `UPDATE ${tableName} 
        SET name = $1, completed = $2
        WHERE id=${id}
        RETURNING *`,
        Object.values(data)
    )
    res.json(rows[0])
}

//DELETE

export const deleteTask = async (req, res)=>{
    const {id} = req.params
    const {rows} = await pool.query(
        `DELETE FROM ${tableName} 
        WHERE id=${id}`
    )
    if (rows.length==0){
        return res.status(404).json('User not found')
    }
    res.json(rows[0])
}