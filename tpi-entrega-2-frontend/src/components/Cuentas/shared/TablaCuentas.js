import { cuentasService } from "../../../services/cuentas.service.js"

const TablaCuentas = ({ cuentas, setActivarAgregar, setActivarFormulario, setIdCuenta, setCuentas }) => {
    const handleClickModificar = (idCuenta) => {
        setIdCuenta(idCuenta)
        setActivarAgregar(false)
        setActivarFormulario(true)
    }

    const handleClickEliminar = async (idCuenta) => {
        await cuentasService.deleteCuenta(idCuenta)
        const accounts = await cuentasService.getCuentas()
        setCuentas(accounts)
    }

    return (
        <table className="table table-striped mt-3">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Fecha de Alta</th>
                    <th>Saldo</th>
                    <th>Tipo de Cuenta</th>
                    <th>Codigo de Cliente</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    cuentas && cuentas.map((c, index) => (
                        <tr key={c.IdCuenta}>
                            <td>{index + 1}</td>
                            <td>{c.IdCuenta}</td>
                            <td>{c.FechaAlta}</td>
                            <td>{c.Saldo}</td>
                            <td>{c.TipoCuenta}</td>
                            <td>{c.CodigoCliente}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => { handleClickModificar(c.IdCuenta) }}>Modificar</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => { handleClickEliminar(c.IdCuenta) }}>Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export { TablaCuentas }