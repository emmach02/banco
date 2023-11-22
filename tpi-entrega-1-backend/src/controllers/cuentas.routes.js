import express from "express"
import cuentasService from "../services/cuentas.service.js";
//import { ResourceNotFound } from "../errors/resource-not-found-error.js";
//import { ValidationError } from "sequelize";

const router = express.Router();

router.get("/", async (req, res, next) => { // next seria como que va a otra funcion
    try {
        const cuentas = await cuentasService.getCuentas();
        return res.json(cuentas);
    } catch (error) {
        next(error) // cuando paso el error le paso como parametro el error, y que la funcion a la que delego se encargue
    }
})

router.get("/:id", async (req,res, next) => {
    try {
        const idCta = req.params.id
        const cuentaEspecifica = await cuentasService.getCuentaById(idCta);
        return res.json(cuentaEspecifica)
    } catch (error) {
        next(error)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const cuenta = await cuentasService.insertarCuenta(req.body)
        return res.json(cuenta);
    } catch (error) {
        next(error)
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const cuenta = await cuentasService.editarCuenta(req.params.id, req.body)
        return res.json(cuenta);
    } catch (err) {  
        next(err)
    }
})

router.delete("/:id", async (req,res, next) => {
    try {
        const idCta = req.params.id;
        const resultado = await cuentasService.cuentasDelete(idCta);
        return res.json(resultado);
    } catch (error) {
        next(error)
    }
})


const cuentasRouter = {
    router
}

export default cuentasRouter
