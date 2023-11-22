import clientesService from "../../../services/clientes.service.js";

const TablaClientes = ({
  clientes,
  setActivarAgregar,
  setActivarFormulario,
  setCodigoCliente,
  setClientes,
}) => {
  const handleClickModificar = (codigoCliente) => {
    setCodigoCliente(codigoCliente);
    setActivarAgregar(false);
    setActivarFormulario(true);
  };

  const handleClickEliminar = async (codigoCliente) => {
    await clientesService.deleteCliente(codigoCliente);

    const clientes = await clientesService.getClientes();
    setClientes(clientes);
  };

  return (
    <table className="table table-striped mt-3">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Telefono</th>
          <th>Fecha Nac.</th>
          <th>Modificar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {clientes &&
          clientes.map((c, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{c.CodigoCliente}</td>
              <td>{c.Nombre}</td>
              <td>{c.Apellido}</td>
              <td>{c.Telefono}</td>
              <td>{c.FechaNacimiento}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    handleClickModificar(c.CodigoCliente);
                  }}
                >
                  Modificar
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleClickEliminar(c.CodigoCliente);
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TablaClientes;
