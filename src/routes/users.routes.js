import { Router } from "express"
import { 
    createUser, 
    deleteUser, 
    getUserById, 
    getUsers, 
    updateUser
} from "../controllers/users.controllers.js"

const router = Router()

//GET
router.get('/users',getUsers)
router.get('/users/:id',getUserById)

//POST
router.post('/users',createUser)

//PUT
router.put('/users/:id',updateUser)

//DELETE
router.delete('/users/:id',deleteUser)

export default router