import express from "express"
import bodyParser from "body-parser"
import clienteRoutes from "./router/router"

const app = express()
app.use(bodyParser.json())

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de Clientes de Edwin Pool")
})

// Rutas de clientes
app.use("/customer", clienteRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})