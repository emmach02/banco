import { useEffect, useState } from "react"
import sucursalesService from "../../../services/sucursales.service.js"
import { useForm } from "react-hook-form"
import LocalidadesService from "../../../services/localidades.service.js"

const FormularioSucursales = ({ activarAgregar, setActivarFormulario, codSucursal, setSucursales }) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const [esCargado, setEsCargado] = useState(false);
    const [esCodError, setCodError] = useState(false);

    const onSubmit = async (data, e) => {
        e.preventDefault()
        let sucursal = {
            Nombre: data.Nombre,
            InicioActividad: data.InicioActividad,
            CodLocalidad: data.CodLocalidad,
        }
        
        const localidades = await LocalidadesService.getLocalidades()
        const codigosLoc = localidades.map(obj => obj.CodLocalidades);

        if (!codigosLoc.includes(parseInt(sucursal.CodLocalidad))) {
            return setCodError(true)
        }
        setCodError(false)
        
        if(activarAgregar) {
            await sucursalesService.agregarSucursal(sucursal)
        }
        else {
            await sucursalesService.actualizarSucursal(codSucursal, sucursal)
        }

        const sucursales = await sucursalesService.getSucursales()
        setSucursales(sucursales)
        setActivarFormulario(false)
    }

    const handleClickCancelar = (e) => {
        setActivarFormulario(false)
    }

    useEffect(() => {
        if (!activarAgregar && !esCargado) {
            const loadSucursal = async () => {
                const data = await sucursalesService.getSucursal(codSucursal)
                setValue("Nombre", data.Nombre)
                setValue("InicioActividad", data.InicioActividad)
                setValue("CodLocalidad", data.CodLocalidad)
            }
            loadSucursal()
            setEsCargado(true)
        }
    }, [])

    return (
        <div className="card">
            <div className="card-body">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-2">
                        <label className="form-label">Nombre:</label>
                        <input type="text" className="form-control" {...register("Nombre", { required: true })} />
                        <span className="text-danger">
                            {errors.Nombre && "Se requiere el nombre de la sucursal"}
                        </span>
                    </div>
                    <div className="my-2">
                        <label className="form-label">Inicio de Actividad:</label>
                        <input type="date" className="form-control" {...register("InicioActividad", { required: true })} />
                        <span className="text-danger">
                            {errors.InicioActividad && "Se requiere la fecha de inicio de actividad"}
                        </span>
                    </div>
                    <div className="my-2">
                        <label className="form-label">Código de Localidad:</label>
                        <input type="number" className="form-control" {...register("CodLocalidad", { required: true })} />
                        <span className="text-danger">
                            {errors.CodLocalidad && "Se requiere el código de localidad"}
                            {esCodError && "El código de Localidad ingresado no existe"}
                        </span>
                    </div>
                    <div className="d-flex justify-content-evenly mt-4">
                        {activarAgregar ? (
                            <button type="submit" className="btn btn-primary">Agregar</button>
                        ) : (
                            <button type="submit" className="btn btn-success">Modificar</button>
                        )}
                        <button type="button" className="btn btn-danger" onClick={(e) => handleClickCancelar(e)}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default FormularioSucursales