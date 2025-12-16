import express from 'express'
import {PORT} from "./config.js"
import usersRoutes from "./routes/users.routes.js"
import productsRoutes from "./routes/products.routes.js"
import mainRoute from './routes/main.routes.js'
import cors from 'cors';

const app = express()

app.use(cors({
  origin: '*', // luego lo cambiamos a un dominio específico si quieres
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));



app.use(express.json())
app.use(usersRoutes)
app.use(productsRoutes)
app.use(mainRoute)

app.listen(PORT,()=>{
    console.log(`Iniciando en el puerto ${PORT}`)
})