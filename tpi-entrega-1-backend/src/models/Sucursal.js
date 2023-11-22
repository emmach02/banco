import { DataTypes } from "sequelize";

const SucursalAttributes = {
    CodSucursal: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'El Nombre de la Sucursal es requerido.'
            }
        },
    },
    InicioActividad: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Fecha de Inicio de Actividad es requerida.'
            }
        },
    },
    CodLocalidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'El Código de Surcursal es requerido.'
            }
        }
    },
    Activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}

const SucursalOptions = {
    timestamps: false,
}

const SucursalModel = {
    SucursalAttributes,
    SucursalOptions
}

export default SucursalModel;