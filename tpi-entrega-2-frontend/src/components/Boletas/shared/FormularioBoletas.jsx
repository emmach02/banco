import { useEffect, useState } from "react"
import boletasService from "../../../services/boletas.service";
import { useForm } from "react-hook-form"
import sucursalesService from "../../../services/sucursales.service";
import { cuentasService } from "../../../services/cuentas.service";

const FormularioBoletas = ({ activarAgregar, setActivarFormulario, nroBoleta, setBoletas }) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const [esCargado, setEsCargado] = useState(false)
    const [esCodErrorSuc, setCodErrorSuc] = useState(false)
    const [esCodErrorCuenta, setCodErrorCuenta] = useState(false)

    const onSubmit = async (data, e) => {
        let boleta = {
            NroBoleta: data.NroBoleta,
            Monto: data.Monto,
            FechaOperacion: data.FechaOperacion,
            Descripcion: data.Descripcion,
            IdCuenta: data.IdCuenta,
            CodSucursal: data.CodSucursal,
            TipoMovimiento: data.TipoMovimiento
        }
        
        const cuentas = await cuentasService.getCuentas()
        const codigosCuentas = cuentas.map(obj => obj.IdCuenta);

        if (!codigosCuentas.includes(parseInt(boleta.IdCuenta))) {
            return setCodErrorCuenta(true)
        }
        setCodErrorCuenta(false)

        const sucursales = await sucursalesService.getSucursales()
        const codigosSuc = sucursales.map(obj => obj.CodSucursal);

        if (!codigosSuc.includes(parseInt(boleta.CodSucursal))) {
            return setCodErrorSuc(true)
        }
        setCodErrorSuc(false)
        
        if(activarAgregar) {
            await boletasService.agregarBoleta(boleta)
        }
        else {
            await boletasService.actualizarBoleta(nroBoleta, boleta)
        }

        const boletas = await boletasService.getBoletas()
        setBoletas(boletas)
        setActivarFormulario(false)
    }

    const handleClickCancelar = (e) => {
        setActivarFormulario(false)
    }

    useEffect(() => {
        if (!activarAgregar && !esCargado) {
            const loadBoletas = async () => {
                const data = await boletasService.getBoleta(nroBoleta)
                setValue("NroBoleta", data.NroBoleta)
                setValue("Monto", data.Monto)
                setValue("FechaOperacion", (data.FechaOperacion))
                setValue("Descripcion", data.Descripcion)
                setValue("IdCuenta", data.IdCuenta)
                setValue("CodSucursal", data.CodSucursal)
                setValue("TipoMovimiento", data.TipoMovimiento)
            }
            loadBoletas()
            setEsCargado(true)
        }
    }, {})

    return (
        <div className="card">
            <div className="card-body">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-2">
                        <label className="form-label">Monto:</label>
                        <input type="number" className="form-control" {...register("Monto", { required: true })} />
                        <span className="text-danger">
                            {errors.Monto && "Se requiere el monto"}
                        </span>
                    </div>
                    <div className="my-2">
                        <label className="form-label">Fecha Operacion:</label>
                        <input type="date" className="form-control" {...register("FechaOperacion", { required: true })} />
                        <span className="text-danger">
                            {errors.FechaOperacion && "Se requiere la Fecha de Operacion"}
                        </span>
                    </div>
                    <div className="my-2">
                        <label className="form-label">Descripcion:</label>
                        <input type="text" className="form-control" {...register("Descripcion", { required: true })} />
                        <span className="text-danger">
                            {errors.Descripcion && "Se requiere la descripcion"}
                        </span>
                    </div>
                    <div className="my-2">
                        <label className="form-label">IdCuenta:</label>
                        <input type="number" className="form-control" {...register("IdCuenta", { required: true })} />
                        <span className="text-danger">
                            {errors.IdCuenta && "Se requiere elId de la cuenta"}
                            {esCodErrorCuenta && "El código de la cuenta ingresada no existe"}
                        </span>
                    </div>
                    <div className="my-2">
                        <label className="form-label">CodSucursal:</label>
                        <input type="number" className="form-control" {...register("CodSucursal", { required: true })} />
                        <span className="text-danger">
                            {errors.CodSucursal && "Se requiere El Cod de la sucursal"}
                            {esCodErrorSuc && "El código de la sucursal ingresada no existe"}
                        </span>
                    </div>
                    <div className="my-2">
                        <label className="form-label">TipoMovimiento:</label>
                        <input type="text" className="form-control" {...register("TipoMovimiento", { required: true })} />
                        <span className="text-danger">
                            {errors.TipoMovimiento && "Se requiere el Tipo de movimiento"}
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
export default FormularioBoletas