import { Sequelize } from "sequelize";
import clienteModel from "../models/Cliente.js";
import SucursalModel from "../models/Sucursal.js";
import CuentasModel from "../models/Cuentas.js";
import BoletasModels from "../models/Boletas.js";
import LocalidadModel from "../models/Localidad.js";

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "banco.c9qwguu5jop5.sa-east-1.rds.amazonaws.com",
    username: "emmach",
    password: "12345678",
    database: "banco",
});

sequelize.define(
    "Clientes", 
    clienteModel.clienteAttributes, 
    clienteModel.clienteOptions
);

sequelize.define(
    "Localidades",
    LocalidadModel.localidadAttributes,
    LocalidadModel.localidadOptions
);

sequelize.define(
    'Boletas', 
    BoletasModels.boletasAtributos, 
    BoletasModels.boletasMetodos
);

sequelize.define(
    'Cuentas',
    CuentasModel.cuentasAttributes,
    CuentasModel.cuentasMethods
);

sequelize.define(
    "Sucursales",
    SucursalModel.SucursalAttributes,
    SucursalModel.SucursalOptions
);

sequelize.models.Sucursales.belongsTo(sequelize.models.Localidades, {
    foreignKey: 'CodLocalidad'
});

sequelize.models.Cuentas.belongsTo(sequelize.models.Clientes, {
    foreignKey: 'CodigoCliente'
});

sequelize.models.Boletas.belongsTo(sequelize.models.Cuentas, {
    foreignKey: 'IdCuenta'
});

sequelize.models.Boletas.belongsTo(sequelize.models.Sucursales, {
    foreignKey: 'CodSucursal'
})

try {
    await sequelize.sync();
} catch (error) {
    console.log("Error en la conexion a la BD:", error.message);
}

export default sequelize;