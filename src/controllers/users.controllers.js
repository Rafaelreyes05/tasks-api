import { pool } from '../db.js'
let tableName = 'users'


//GET
export const getUsers = async (req, res)=>{
    const {rows} = await pool.query(`SELECT * FROM ${tableName}`)
    res.json(rows)
}

export const getUserById = async(req, res)=>{
    const id = req.params.id
    const {rows} = await pool.query(
        `SELECT * FROM ${tableName} WHERE id=${id}`)
    if (rows.length==0){
        return res.status(404).json('User not found')
    }
    res.json(rows[0])
}


//POST
export const createUser = async (req, res)=>{
    const data = req.body
    const {rows} = await pool.query (`INSERT INTO ${tableName} (name, lastname, age) VALUES ($1, $2, $3) RETURNING *`,
        Object.values(data)
    )
    res.json(rows)
}

//PUT
export const updateUser = async (req, res)=>{
    res.json('Updating user')
}

//DELETE

export const deleteUser = async (req, res)=>{
    res.json('Eliminando usuario')
}