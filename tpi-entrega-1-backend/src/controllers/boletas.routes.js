import express from "express";
import BoletasService from "../services/boletas.service.js";


const router = express.Router();

router.get("", async (req, res, next) => {
    try {
        const resultado = await BoletasService.getBoletas();
        return res.json(resultado);

    } catch (error) {
        next(error);
        //Delega la responsabilidadl al middlewer
    }
});

router.get("/:nro", async (req, res, next) => {
    try {
        const resultado = await BoletasService.getBoletasById(req.params.nro);
        return res.json(resultado);

    } catch (error) {
        next(error);
    }
});

router.post("", async (req, res, next) => {
    try {
        const resultado = await BoletasService.insertarBoleta(req.body);
        return res.json(resultado);

    } catch (error) {
        next(error);
    }
});

router.put("/:nro", async (req, res, next) => {
    try {
        const resultado = await BoletasService.actualizarBoleta(req.params.nro, req.body);
        return res.json(resultado);

    } catch (error) {
        next(error);
    }
});

router.delete("/:nro", async (req, res, next) => {
    try {
        const resultado = await BoletasService.eliminarBoleta(req.params.nro);
        return res.json(resultado);

    } catch (error) {
        next(error);
    }
});

const boletasRouter = {
    router
}

export default boletasRouter;
