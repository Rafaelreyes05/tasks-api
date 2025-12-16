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
router.post('/tasks',createTask)

//PUT
router.put('/tasks/:id',updateTask)

//DELETE
router.delete('/tasks/:id',deleteTask)

export default router