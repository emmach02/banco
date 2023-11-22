import express from "express";
import localidadService from "../services/localidad.service.js"

const router = express.Router();

router.get('', async (req, res, next) => {
        try {
                const localidades = await localidadService.getLocalidades();
                res.json(localidades);
        } catch(err) {
                next(err);
        }
});

router.get('/:id', async (req, res, next) => {
        try { 
                const localidadEspecifica = await localidadService.getLocalidadById(req.params.id);
                res.json(localidadEspecifica);
        } catch(err) {
                next(err); 
        }
})

router.post('', async (req, res, next) => {
        try {
                const localidad = await localidadService.insertarLocalidad(req.body);
                return res.json(localidad);
        } catch(err) {
                next(err);
        }
});

router.put("/:id", async (req, res, next) => {
        try{ 
                req.body.id = req.params.id //debe ir el mismo nombre que ":./id"
                const localidad = await localidadService.actualizarLocalidad(req.body)
                return res.json(localidad);
        } catch(err) {
                next(err);
        };
});

router.delete("/:id", async (req, res, next) => {
        try {
                const localidad = await localidadService.eliminarLocalidad(req.params.id);
                return res.json(localidad);
        } catch(err) {
                next(err);
        };
});

const localidadesRouter = { router }

export default localidadesRouter