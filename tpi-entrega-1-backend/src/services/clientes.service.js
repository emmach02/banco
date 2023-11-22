import sequelize from "../database/database.js";
import { ResourceNotFound } from "../errors/resource-not-found-error.js";

const getClientes = async () => {
    const resultado = await sequelize.models.Clientes.findAll({
        attributes: [
            "CodigoCliente",
            "Nombre",
            "Apellido",
            "Telefono",
            "FechaNacimiento",
            "Activo"
        ],
        order: [['CodigoCliente', 'ASC']],
        where: {
            Activo: true
        }
    });

    return resultado.map(cliente => cliente.dataValues);
}

const getClienteById = async (id) => {
    const resultado = await sequelize.models.Clientes.findOne({
        attributes: [
            "CodigoCliente",
            "Nombre",
            "Apellido",
            "Telefono",
            "FechaNacimiento",
            "Activo"
        ],
        order: [['CodigoCliente', 'ASC']],
        where: {
            CodigoCliente: id,
            Activo: true
        }
    });

    if (!resultado) {
        throw new ResourceNotFound("Cliente no encontrado");
    }

    return resultado.dataValues;
}

const insertarCliente = async (cliente) => {
    const resultado = await sequelize.models.Clientes.create({
        Nombre: cliente.Nombre,
        Apellido: cliente.Apellido,
        Telefono: cliente.Telefono,
        FechaNacimiento: cliente.FechaNacimiento
    });

    return resultado.dataValues;
}

const actualizarCliente = async (id, cliente) => {
    const resultado = await sequelize.models.Clientes.findOne({
        where: {
            CodigoCliente: id,
            Activo: true
        }
    });

    if (!resultado) {
        throw new ResourceNotFound("Cliente no encontrado");
    }

    resultado.set(cliente);
    await resultado.save();

    return { CodigoCliente: resultado.dataValues.CodigoCliente };
}

const eliminarCliente = async (id) => {
    const client = await sequelize.models.Clientes.findOne({
        where: {
            CodigoCliente: id,
            Activo: true
        }
    });

    if (!client) {
        throw new ResourceNotFound("Cliente no encontrado");
    }

    client.Activo = false;
    await client.save();

    return { message: "Cliente eliminado exitosamente" };
}

const clientesService = {
    getClientes,
    getClienteById,
    insertarCliente,
    actualizarCliente,
    eliminarCliente
}

export default clientesService;