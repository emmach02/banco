import express from "express";
import clientesService from "../services/clientes.service.js";

const router = express.Router();

router.get("", async (req, res, next) => {
    try {
        const resultado = await clientesService.getClientes();
        return res.json(resultado);

    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const resultado = await clientesService.getClienteById(req.params.id);
        return res.json(resultado);

    } catch (error) {
        next(error);
    }
});

router.post("", async (req, res, next) => {
    try {
        const resultado = await clientesService.insertarCliente(req.body);
        return res.json(resultado);

    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const resultado = await clientesService.actualizarCliente(req.params.id, req.body);
        return res.json(resultado);

    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const resultado = await clientesService.eliminarCliente(req.params.id);
        return res.json(resultado);

    } catch (error) {
        next(error);
    }
});

const clientesRouter = {
    router
}

export default clientesRouter;