import { Router } from "express"
import { 
    createTask, 
    deleteTask, 
    getTaskById, 
    getTasks,
    updateTask,
} from "../controllers/tasks.controllers.js"

const router = Router()

//GET
router.get('/tasks',getTasks)
router.get('/tasks/:id',getTaskById)

//POST
router.post('/products',createTask)

//PUT
router.put('/products/:id',updateTask)

//DELETE
router.delete('/products/:id',deleteTask)

export default router