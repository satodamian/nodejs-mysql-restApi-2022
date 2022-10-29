import express from 'express'
import employeesRoutes from '../routes/employees.routes.js'
import indexRoutes from '../routes/index.routes.js'

const app = express();

app.use(express.json())


app.use(indexRoutes)
// Anexo el nombre de api con mis rutas definidas
app.use('/api', employeesRoutes)
app.use((req, res, next)=>{
    res.status(404).json({
        message: 'Ruta inexistente'
    })
})

export default app;