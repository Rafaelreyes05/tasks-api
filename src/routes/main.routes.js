import { Router } from "express"
import { mainPage} from "../controllers/main.controllers.js"

const router = Router()

//GET
router.get('/',mainPage)

export default router