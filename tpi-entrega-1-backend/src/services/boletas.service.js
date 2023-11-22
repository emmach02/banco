import sequelize from "../database/database.js";
import { ResourceNotFound } from "../errors/resource-not-found-error.js";

const getBoletas = async () => {
    const resultado = await sequelize.models.Boletas.findAll({
        attributes: [
            "NroBoleta",
            "Monto",
            "FechaOperacion",
            "Descripcion",
            "IdCuenta",
            "CodSucursal",
            "TipoMovimiento",
            "Activo"
        ],
        order: [['NroBoleta', 'ASC']],
        where: {
            Activo: true
        }
    });

    return resultado.map(boleta => boleta.dataValues);
}

const getBoletasById = async (nro) => {
    const resultado = await sequelize.models.Boletas.findOne({
        attributes: [
            "NroBoleta",
            "Monto",
            "FechaOperacion",
            "Descripcion",
            "IdCuenta",
            "CodSucursal",
            "TipoMovimiento",
            "Activo"
        ],
        order: [['NroBoleta', 'ASC']],
        where: {
            NroBoleta: nro,
            Activo: true

        }
    });

    if (!resultado) {
        throw new ResourceNotFound("Boleta no encontrado");
    }

    return resultado.dataValues;
}

const insertarBoleta = async (boleta) => {
    const resultado = await sequelize.models.Boletas.create({
        Monto: boleta.Monto,
        FechaOperacion: boleta.FechaOperacion,
        Descripcion: boleta.Descripcion,
        IdCuenta: boleta.IdCuenta,
        CodSucursal: boleta.CodSucursal,
        TipoMovimiento: boleta.TipoMovimiento
    });

    return resultado.dataValues;
}

const actualizarBoleta = async (nro, boleta) => {
    const resultado = await sequelize.models.Boletas.findOne({
        where: {
            NroBoleta: nro,
            Activo: true
        }
    });

    if (!resultado) {
        throw new ResourceNotFound("Boleta no encontrado");
    }

    resultado.set(boleta);

    await resultado.save();

    return { NroBoleta: resultado.dataValues.NroBoleta };
}

const eliminarBoleta = async (nro) => {
    const bolet = await sequelize.models.Boletas.findOne({
        where: {
            NroBoleta: nro,
            Activo: true
        }
    });

    if (!bolet) {
        throw new ResourceNotFound("Boleta no encontrado");
    }

    bolet.Activo = false;
    await bolet.save();

    return { message: "Boleta eliminada exitosamente" };
};

const BoletasService = {
    getBoletas,
    getBoletasById,
    insertarBoleta,
    actualizarBoleta,
    eliminarBoleta
};

export default BoletasService;
