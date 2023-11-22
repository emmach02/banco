import { DataTypes } from 'sequelize';

const boletasAtributos = {
    NroBoleta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Monto: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Necesita ingresar el monto"
            }
        }
    },
    FechaOperacion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Se necesita que ingrese la fecha"
            }
        }
    },
    Descripcion: {
        type: DataTypes.STRING, // Siempre es string en el sql y no varchar 
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Se necesita que ingrese una descripcion"
            }
        }
    },
    IdCuenta: {
        type: DataTypes.INTEGER,
    },
    CodSucursal: {
        type: DataTypes.INTEGER,
    },
    TipoMovimiento: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Se necesita que ingrese el tipo de movimiento"
            }
        }
    },
    Activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }



}



const boletasMetodos = {
    timestamps: false
}




const BoletasModels = {
    boletasAtributos,
    boletasMetodos
}

export default BoletasModels