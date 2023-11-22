import boletasService from "../../../services/boletas.service";

const TablaBoletas = ({ boletas, setActivarAgregar, setActivarFormulario, setNroBoleta, setBoletas }) => {
    const handleClickModificar = (NroBoleta) => {
        setNroBoleta(NroBoleta)
        setActivarAgregar(false)
        setActivarFormulario(true)
    }

    const handleClickEliminar = async (NroBoleta) => {
        await boletasService.deleteBoleta(NroBoleta)

        const boletas = await boletasService.getBoletas()
        setBoletas(boletas)
    }

    return (
        <table className="table table-striped mt-3">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>NroBoleta</th>
                    <th>Monto</th>
                    <th>Fecha Op</th>
                    <th>Descrip</th>
                    <th>IdCuenta</th>
                    <th>CodSurc</th>
                    <th>Tipo Mov</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    boletas && boletas.map((b, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{b.NroBoleta}</td>
                            <td>{b.Monto}</td>
                            <td>{b.FechaOperacion}</td>
                            <td>{b.Descripcion}</td>
                            <td>{b.IdCuenta}</td>
                            <td>{b.CodSucursal}</td>
                            <td>{b.TipoMovimiento}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => { handleClickModificar(b.NroBoleta) }}>Modificar</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => { handleClickEliminar(b.NroBoleta) }}>Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TablaBoletas