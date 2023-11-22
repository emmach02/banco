import { DataTypes } from "sequelize";

const clienteAttributes = {
    CodigoCliente: {
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
                msg: "El nombre del cliente es requerido"
            }
        }
    },
    Apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El apellido del cliente es requerido"
            }
        }
    },
    Telefono: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El telefono del cliente es requerido"
            }
        }
    },
    FechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La fecha de nacimiento del cliente es requerido"
            }
        }
    },
    Activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
};

const clienteOptions = {
    timestamps: false
};

const clienteModel = {
    clienteAttributes,
    clienteOptions
};

export default clienteModel;