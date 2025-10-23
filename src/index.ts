import express from "express"
import bodyParser from "body-parser"
import clienteRoutes from "./router/router"
import serverless from "serverless-http"

const app = express()
app.use(bodyParser.json())

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de Clientes de Edwin Pool")
})

// Rutas de clientes
app.use("/customer", clienteRoutes)

// Exportar el handler para AWS Lambda
module.exports.handler = serverless(app)