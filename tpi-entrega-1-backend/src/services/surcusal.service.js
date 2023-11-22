import sequelize from "../database/database.js";
import { ResourceNotFound } from "../errors/resource-not-found-error.js";

// get Surcursales
const getSucursales = async () => {
    const result = await sequelize.models.Sucursales.findAndCountAll({
        attributes: [
            "CodSucursal",
            "Nombre",
            "InicioActividad",
            "CodLocalidad",
            "Activo"
        ],
        order: [['Nombre', "ASC"]],
        where: {
            Activo: true
        }
    });

    if (!result || !result.rows)
        return [];
    console.log("Sucursal:", result)
    return result.rows.map(suc => suc.dataValues)
};

// post Sucursales
const insertSucursal = async (sucursalCMD) => {
    const resultado = await sequelize.models.Sucursales.create({
        Nombre: sucursalCMD.Nombre,
        InicioActividad: sucursalCMD.InicioActividad,
        CodLocalidad: sucursalCMD.CodLocalidad,
    })

    return resultado.dataValues;
};

//get por CodSucursal la Sucursal
const getSucursalById = async (codSucIngresado) => {
    const resultado = await sequelize.models.Sucursales.findOne({
        where: { CodSucursal: codSucIngresado, Activo: true },
        attributes: [
            "CodSucursal",
            "Nombre",
            "InicioActividad",
            "CodLocalidad",
            "Activo"
        ],
    });

    if (!resultado) {
        throw new ResourceNotFound("Sucursal no encontrada");
    }

    return resultado.dataValues;
};

const editSucursal = async (id, sucursal) => {
    const resultado = await sequelize.models.Sucursales.findOne({
        where: { CodSucursal: id, Activo: true },
    });

    if (!resultado) {
        throw new ResourceNotFound("Sucursal no encontrada");
    }

    resultado.set(sucursal);
    await resultado.save();

    return { CodSucursal: resultado.dataValues.CodSucursal };
};

const deleteSucursal = async (codSucursal) => {
    const sucursal = await sequelize.models.Sucursales.findOne({
        where: { CodSucursal: codSucursal, Activo: true }
    });

    if (!sucursal) {
        throw new ResourceNotFound("Cliente no encontrado");
    }

    sucursal.Activo = false;
    await sucursal.save();

    return { message: "Sucursal eliminada exitosamente" };
};

const sucursalesService = {
    getSucursales,
    insertSucursal,
    getSucursalById,
    editSucursal,
    deleteSucursal
};

export default sucursalesService;

