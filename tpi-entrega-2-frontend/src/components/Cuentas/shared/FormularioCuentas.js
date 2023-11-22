import { useEffect, useState } from "react"
import { cuentasService } from "../../../services/cuentas.service.js"
import { useForm } from "react-hook-form"
import clientesService from "../../../services/clientes.service.js"

const FormularioCuentas = ({ activarAgregar, setActivarFormulario, idCuenta, setCuentas }) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const [esCargado, setEsCargado] = useState(false)
    const [esCodError, setCodError] = useState(false)

    const onSubmit = async (data, e) => {
        const cuenta = {
            FechaAlta: data.FechaAlta,
            Saldo: data.Saldo,
            TipoCuenta: data.TipoCuenta,
            CodigoCliente: data.CodigoCliente
        }

        const clientes = await clientesService.getClientes()
        const codigosCli = clientes.map(obj => obj.CodigoCliente);

        if (!codigosCli.includes(parseInt(cuenta.CodigoCliente))) {
            return setCodError(true)
        }
        setCodError(false)

        if (activarAgregar) {
            await cuentasService.agregarCuenta(cuenta)
        }
        else {
            await cuentasService.actualizarCuenta(idCuenta, cuenta)
        }

        const accounts = await cuentasService.getCuentas()
        setCuentas(accounts)
        setActivarFormulario(false)
    }

    const handleClickCancelar = (e) => {
        setActivarFormulario(false)
    }

    useEffect(() => {
        if (!activarAgregar && !esCargado) {
            const loadCuenta = async () => {
                const data = await cuentasService.getCuenta(idCuenta)
                setValue("FechaAlta", data.FechaAlta)
                setValue("Saldo", data.Saldo)
                setValue("TipoCuenta", data.TipoCuenta)
                setValue("CodigoCliente", String(data.CodigoCliente))
            }
            loadCuenta()
            setEsCargado(true)
        }
    }, [])

    return (
        <div className="card">
            <div className="card-body">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-2">
                        <label className="form-label">Fecha de Alta:</label>
                        <input type="date" className="form-control" {...register("FechaAlta", { required: true })} />
                        <span className="text-danger">
                            {errors.FechaAlta && "Se requiere la fecha de alta"}
                        </span>
                    </div>
                    <div className="my-2">
                        <label className="form-label">Saldo:</label>
                        <input type="number" className="form-control" {...register("Saldo", { required: true })} />
                        <span className="text-danger">
                            {errors.Saldo && "Se requiere el Saldo"}
                        </span>
                    </div>
                    <div className="my-2">
                        <label className="form-label">Tipo de Cuenta:</label>
                        <input type="text" className="form-control" {...register("TipoCuenta", { required: true })} />
                        <span className="text-danger">
                            {errors.TipoCuenta && "Se requiere el TipoCuenta"}
                        </span>
                    </div>
                    <div className="my-2">
                        <label className="form-label">Codigo de Cliente:</label>
                        <input type="number" className="form-control" {...register("CodigoCliente", { required: true })} />
                        <span className="text-danger">
                            {errors.CodigoCliente && "Se requiere el CodigoCliente"}
                            {esCodError && "EL Codigo de cliente ingresado no existe"}
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
export { FormularioCuentas }
