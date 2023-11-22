import sucursalesService from "../../../services/sucursales.service.js"

const TablaSucursales = ({ sucursales, setActivarAgregar, setActivarFormulario, setCodSucursal, setSucursales }) => {
    const handleClickModificar = (codSucursal) => {
        setCodSucursal(codSucursal)
        setActivarAgregar(false)
        setActivarFormulario(true)
    }

    const handleClickEliminar = async (codSucursal) => {
        await sucursalesService.deleteSucursal(codSucursal)

        const sucursales = await sucursalesService.getSucursales()
        setSucursales(sucursales)
    }

    return (
        <table className="table table-striped mt-3">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Inicio de Actividad</th>
                    <th>Código de Localidad</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    sucursales && sucursales.map((s, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{s.CodSucursal}</td>
                            <td>{s.Nombre}</td>
                            <td>{s.InicioActividad}</td>
                            <td>{s.CodLocalidad}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => { handleClickModificar(s.CodSucursal) }}>Modificar</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => { handleClickEliminar(s.CodSucursal) }}>Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TablaSucursales