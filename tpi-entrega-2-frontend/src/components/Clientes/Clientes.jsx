import { useEffect, useState } from "react";
import TablaClientes from "./shared/TablaClientes";
import FormularioClientes from "./shared/FormularioClientes";
import BuscarClientes from "./shared/BuscarClientes";
import clientesService from "../../services/clientes.service.js";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [codigoCliente, setCodigoCliente] = useState(0);
  const [activarFormulario, setActivarFormulario] = useState(false);
  const [activarAgregar, setActivarAgregar] = useState(true);

  useEffect(() => {
    const loadClientes = async () => {
      const clientes = await clientesService.getClientes();
      setClientes(clientes);
    };
    loadClientes();
  }, []);

  return (
    <div className="mt-3">
      <h2>Clientes</h2>
      {!activarFormulario ? (
        <>
          <BuscarClientes
            {...{ setClientes, setActivarAgregar, setActivarFormulario }}
          ></BuscarClientes>
          <TablaClientes
            {...{
              clientes,
              setActivarAgregar,
              setActivarFormulario,
              setCodigoCliente,
              setClientes,
            }}
          ></TablaClientes>
        </>
      ) : (
        <FormularioClientes
          {...{
            activarAgregar,
            setActivarFormulario,
            codigoCliente,
            setClientes,
          }}
        ></FormularioClientes>
      )}
    </div>
  );
};

export default Clientes;
