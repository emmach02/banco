import { useEffect, useState } from "react";
import TablaLocalidades from "./shared/TablaLocalidad.jsx";
import FormularioLocalidades from "./shared/FormularioLocalidades.jsx";
import BuscarLocalidades from "./shared/BuscarLocalidades.jsx";
import LocalidadesService from "../../services/localidades.service.js";

const Localidades = () => {
  const [Localidades, setLocalidades] = useState([]);
  const [codigoLocalidad, setCodigoLocalidad] = useState(0);
  const [activarFormulario, setActivarFormulario] = useState(false);
  const [activarAgregar, setActivarAgregar] = useState(true);

  useEffect(() => {
    const loadLocalidades = async () => {
      const Localidades = await LocalidadesService.getLocalidades();
      setLocalidades(Localidades);
    };
    loadLocalidades();
  }, []);

  return (
    <div className="mt-3">
      <h2>Localidades</h2>
      {!activarFormulario ? (
        <>
          <BuscarLocalidades
            {...{ setLocalidades, setActivarAgregar, setActivarFormulario }}
          ></BuscarLocalidades>
          <TablaLocalidades
            {...{
              Localidades,
              setActivarAgregar,
              setActivarFormulario,
              setCodigoLocalidad,
              setLocalidades,
            }}
          ></TablaLocalidades>
        </>
      ) : (
        <FormularioLocalidades
          {...{
            activarAgregar,
            setActivarFormulario,
            codigoLocalidad,
            setLocalidades,
          }}
        ></FormularioLocalidades>
      )}
    </div>
  );
};

export default Localidades;
