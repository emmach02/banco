import sequelize from "../database/database.js";
import { ResourceNotFound } from "../errors/resource-not-found-error.js";

const getLocalidades = async () => {
    const resultado = await sequelize.models.Localidades.findAll({
        attributes: [
            "CodLocalidades",
            "Nombre",
            "FechaFundacion",
            "Activo"
        ],
        order: [['CodLocalidades', 'ASC']],
        where: {
            Activo: true
        }
    });
    // console.log(resultado)
    return resultado.map(localidad => localidad.dataValues);
}

const getLocalidadById = async (id) => {
    const resultado = await sequelize.models.Localidades.findOne({
        where: { CodLocalidades: id, Activo: true },
    });

    if (!resultado) {
        throw new ResourceNotFound("Localidad no encontrada");
    }

    return resultado.dataValues;
};

const insertarLocalidad = async (localidad) => {
    const resultado = await sequelize.models.Localidades.create({
        Nombre: localidad.Nombre,
        FechaFundacion: localidad.FechaFundacion
    });

    return resultado.dataValues;
}

const actualizarLocalidad = async (localidad) => {
    let localida = await sequelize.models.Localidades.findOne({
        where: {
            CodLocalidades: localidad.id,
            Activo: true
        }
    });

    if (!localida) {
        throw new ResourceNotFound("Localidad no encontrada");
    }

    localida.Nombre = localidad.Nombre
    localida.FechaFundacion = localidad.FechaFundacion

    localida.save();
    return localida;
}

const eliminarLocalidad = async (id) => {
    const localidad = await sequelize.models.Localidades.findOne({
        where: {
            CodLocalidades: id,
            Activo: true
        }
    });

    if (!localidad) {
        throw new ResourceNotFound("Localidad no encontrada");
    }

    localidad.Activo = false;
    await localidad.save();

    return { message: "Localidad eliminada exitosamente" };
}

const localidadService = {
    getLocalidades,
    getLocalidadById,
    insertarLocalidad,
    actualizarLocalidad,
    eliminarLocalidad
}

export default localidadService;
