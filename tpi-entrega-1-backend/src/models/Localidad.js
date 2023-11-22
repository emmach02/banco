import { DataTypes } from 'sequelize';


const localidadAttributes = {
    CodLocalidades: {
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
                msg: 'El Nombre de la localidad es requerido.'
            }
        }
    },
    FechaFundacion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'El FechaFundacion de la localidad es requerido.'
            }
        }
    },
    Activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
};

const localidadOptions = {
    timestamps: false
}

const LocalidadModel = {
    localidadAttributes,
    localidadOptions
}

export default LocalidadModel;