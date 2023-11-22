import { useForm } from "react-hook-form";
import boletasService from "../../../services/boletas.service";

const BuscarBoletas = ({ setBoletas, setActivarAgregar, setActivarFormulario }) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data, e) => {
        e.preventDefault()
        console.log(data)
        const boletas = await boletasService.getBoletas(data)
        setBoletas(boletas)
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
                            <label className="form-label col-12">Descripción:</label>
                            <input type="text" className="form-control" {...register("descripcion")} />
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

export default BuscarBoletas