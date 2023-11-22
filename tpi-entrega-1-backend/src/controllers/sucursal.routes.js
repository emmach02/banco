import sucursalesService from '../services/surcusal.service.js';
import express  from 'express';

const router = express.Router();

router.get("", async(req, res, next) => {
    try {
        // traer
        const sucursales = await sucursalesService.getSucursales()
        // respuesta de la api
        return res.json(sucursales);
    } catch (err) {
        next(err);
    }
    
});

router.get("/:codSuc", async(req, res, next) => {
    try {
        // requiere el codSucursal
        const codSucursal = req.params.codSuc;
        // traer
        const sucursal = await sucursalesService.getSucursalById(codSucursal);
        // respuesta de la api
        return res.json(sucursal);
    } catch (err) {
        next(err);
    }
});

router.post("", async(req, res, next) => {
    try {
        // ingresa el body de la request como parámetros para ingresar surcusal
        const sucursal = await sucursalesService.insertSucursal(req.body);
        // retorno de la request
        return res.json(sucursal);
    } catch (err) {
        next(err);
    };    
});

router.put("/:codSuc", async(req, res, next) => {
    try {
        // requiere codSucursal
        const codSucursal = req.params.codSuc;
        // editamos con el codSucursal obtenido antes
        const editSurcursal = await sucursalesService.editSucursal(codSucursal, req.body);
        // retornamos el response
        return res.json(editSurcursal);
    } catch (err) {
        next(err);
    };  
});

router.delete("/:codSuc", async(req, res, next) => {
    try {
        // parámetro codSuc
        const codSucursal = req.params.codSuc;
        // eliminamos
        const deletedSurcursal = await sucursalesService.deleteSucursal(codSucursal);
        // retorno del deletedSurcursal
        return res.json(deletedSurcursal);
    } catch (err) {
        next(err);
    };  
});

const sucursalRouter = { router }

export default sucursalRouter;