"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("./router/router"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// Ruta raíz
app.get("/", (req, res) => {
    res.send("Bienvenido a la API de Clientes de Edwin Pool");
});
// Rutas de clientes
app.use("/customer", router_1.default);
// Exportar el handler para AWS Lambda
module.exports.handler = (0, serverless_http_1.default)(app);
