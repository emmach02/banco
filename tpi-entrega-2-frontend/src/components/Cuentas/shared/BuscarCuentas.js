import { useForm } from "react-hook-form";
import { cuentasService } from "../../../services/cuentas.service.js";

const BuscarCuentas = ({ setCuentas, setActivarAgregar, setActivarFormulario }) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data, e) => {
        console.log(data)
        const accounts = await cuentasService.getCuentas(data)
        setCuentas(accounts)
    }

    const handleClick = (e) => {
        setActivarAgregar(true)
        setActivarFormulario(true)
    }

    return (
        <div className="card">
            <div className="card-body">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-3">
                        <div className="col-auto">
                            <label className="form-label col-12">Tipo Cuenta:</label>
                            <input type="text" className="form-control" {...register("tipoCuenta")} />
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Ordenar:</label>
                            <select className="form-control" {...register("orden")}>
                                <option value="descendente">Ascendente</option>
                                <option value="ascendente">Descendente</option>
                            </select>
                        </div>
                        <div className="col-auto d-flex align-content-end">
                            <button className="btn btn-primary mt-auto me-3" type="submit">Buscar</button>
                            <button className="btn btn-primary mt-auto" type="button" onClick={e => handleClick(e)}>Agregar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export { BuscarCuentas }
