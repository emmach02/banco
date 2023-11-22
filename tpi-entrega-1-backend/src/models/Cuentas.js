import { DataTypes } from "sequelize";

const cuentasAttributes = {
    IdCuenta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FechaAlta: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Error, porfavor ingrese la fecha de alta"
            }
        }
    },
    Saldo: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Error, porfavor ingrese el saldo de la cuenta"
            }
        }
    },
    TipoCuenta: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Error, porfavor ingrese el tipo de cuenta"
            }
        }
    },
    CodigoCliente: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Error, porfavor ingrese el codigo del cliente titular de la cuenta"
            }
        }
    },
    Activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
};

const cuentasMethods = {
    timestamps: false
};

const CuentasModel = {
    cuentasAttributes,
    cuentasMethods
};

export default CuentasModel;