import localidadesService from "../../../services/localidades.service";
import { useState } from "react";

const Buscarlocalidades = ({
  setLocalidades,
  setActivarAgregar,
  setActivarFormulario,
}) => {
  const [filtros, setFiltros] = useState({
    nombre: "",
    orden: "",
  });

  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await localidadesService.getLocalidades(filtros);
    setLocalidades(data);
  };

  const handleClick = (e) => {
    setActivarAgregar(true);
    setActivarFormulario(true);
  };

  return (
    <div className="card">
      <div className="card-body">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="row g-3">
            <div className="col-auto">
              <label className="form-label col-12">Nombre:</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-auto">
              <label className="form-label">Ordenar:</label>
              <select
                className="form-control"
                name="orden"
                onChange={(e) => handleChange(e)}
              >
                <option value="descendente">Ascendente</option>
                <option value="ascendente">Descendente</option>
              </select>
            </div>
            <div className="col-auto d-flex align-content-end">
              <button className="btn btn-primary mt-auto me-3" type="submit">
                Buscar
              </button>
              <button
                className="btn btn-primary mt-auto"
                type="button"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Agregar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Buscarlocalidades;
