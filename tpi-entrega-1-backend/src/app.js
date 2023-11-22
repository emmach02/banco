import clientesRouter from "./controllers/clientes.routes.js";
import express from "express";
import errorHandler from "./middlewares/error-handler-middleware.js";
import sucursalesRouter from "./controllers/sucursal.routes.js";
import cuentasRouter from "./controllers/cuentas.routes.js";
import boletasRouter from "./controllers/boletas.routes.js";
import localidadesRouter from "./controllers/localidad.routes.js";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())
app.use("/api/banco/boletas", boletasRouter.router);
app.use("/api/banco/cuentas", cuentasRouter.router);
app.use("/api/banco/sucursales", sucursalesRouter.router);
app.use("/api/banco/clientes", clientesRouter.router);
app.use("/api/banco/localidades", localidadesRouter.router);

app.use(errorHandler);

export default app;
