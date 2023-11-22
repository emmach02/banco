import sequelize from "../database/database.js";
import { ValidationError } from "sequelize";
import { ResourceNotFound } from "../errors/resource-not-found-error.js";

const getCuentas = async () => {
    const resultado = await sequelize.models.Cuentas.findAll({
        attributes: [
            'IdCuenta',
            'FechaAlta',
            'Saldo',
            'TipoCuenta',
            'CodigoCliente',
            'Activo'
        ],
        order: [['IdCuenta', 'ASC']],
        where: {
            Activo: true
        }
    });

    return resultado.map(cuenta => cuenta.dataValues);
}

const getCuentaById = async (id) => {
    const resultado = await sequelize.models.Cuentas.findOne({
        attributes: [
            'IdCuenta',
            'FechaAlta',
            'Saldo',
            'TipoCuenta',
            'CodigoCliente',
            'Activo'
        ],
        order: [['IdCuenta', 'ASC']],
        where: {
            IdCuenta: id,
            Activo: true
        }
    });

    if (!resultado) {
        throw new ResourceNotFound("Cuenta no encontrada");
    }

    return resultado.dataValues;

}

const insertarCuenta = async (cuenta) => {
    const resultado = await sequelize.models.Cuentas.create({
        FechaAlta: cuenta.FechaAlta,
        Saldo: cuenta.Saldo,
        TipoCuenta: cuenta.TipoCuenta,
        CodigoCliente: cuenta.CodigoCliente
    });

    return resultado.dataValues;
}

const editarCuenta = async (id, cuenta) => {
    const resultado = await sequelize.models.Cuentas.findOne({
        where: {
            IdCuenta: id,
            Activo: true
        }
    });

    if (!resultado) {
        throw new ResourceNotFound("Cuenta no encontrado");
    }

    resultado.set(cuenta);
    await resultado.save();

    return { IdCuenta: resultado.dataValues.IdCuenta };
}



const cuentasDelete = async (id) => {
    // no pongo el trucatch porque ta en el middleware
    const cuentaEspecifica = await sequelize.models.Cuentas.findOne({ where: { IdCuenta: id, Activo: true } });
    if (!cuentaEspecifica) {
        throw new ResourceNotFound("No se encontro la cuenta")
    }

    cuentaEspecifica.Activo = false;
    await cuentaEspecifica.save();

    return { message: "Cliente eliminado exitosamente" };
}

const clientesService = {
    getCuentas,
    getCuentaById,
    insertarCuenta,
    editarCuenta,
    cuentasDelete
}

export default clientesService;
