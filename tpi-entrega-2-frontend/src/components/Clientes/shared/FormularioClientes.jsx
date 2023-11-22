import { useEffect, useState } from "react";
import clientesService from "../../../services/clientes.service";
import { useForm } from "react-hook-form";

const FormularioClientes = ({
  activarAgregar,
  setActivarFormulario,
  codigoCliente,
  setClientes,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [esCargado, setEsCargado] = useState(false);

  const onSubmit = async (data, e) => {
    let cliente = {
      Nombre: data.Nombre,
      Apellido: data.Apellido,
      Telefono: data.Telefono,
      FechaNacimiento: data.FechaNacimiento,
    };

    if (activarAgregar) {
      await clientesService.agregarCliente(cliente);
    } else {
      await clientesService.actualizarCliente(codigoCliente, cliente);
    }

    const clientes = await clientesService.getClientes();
    setClientes(clientes);
    setActivarFormulario(false);
  };

  const handleClickCancelar = (e) => {
    setActivarFormulario(false);
  };

  useEffect(() => {
    if (!activarAgregar && !esCargado) {
      const loadCliente = async () => {
        const data = await clientesService.getCliente(codigoCliente);
        setValue("Nombre", data.Nombre);
        setValue("Apellido", data.Apellido);
        setValue("Telefono", data.Telefono);
        setValue("FechaNacimiento", String(data.FechaNacimiento));
      };
      loadCliente();
      setEsCargado(true);
    }
  }, {});

  return (
    <div className="card">
      <div className="card-body">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            <label className="form-label">Nombre:</label>
            <input
              type="text"
              className="form-control"
              {...register("Nombre", { required: true })}
            />
            <span className="text-danger">
              {errors.Nombre && "Se requiere el nombre"}
            </span>
          </div>
          <div className="my-2">
            <label className="form-label">Apellido:</label>
            <input
              type="text"
              className="form-control"
              {...register("Apellido", { required: true })}
            />
            <span className="text-danger">
              {errors.Apellido && "Se requiere el apellido"}
            </span>
          </div>
          <div className="my-2">
            <label className="form-label">Telefono:</label>
            <input
              type="text"
              className="form-control"
              {...register("Telefono", { required: true })}
            />
            <span className="text-danger">
              {errors.Telefono && "Se requiere el telefono"}
            </span>
          </div>
          <div className="my-2">
            <label className="form-label">Fecha de Nacimiento:</label>
            <input
              type="date"
              className="form-control"
              {...register("FechaNacimiento", { required: true })}
            />
            <span className="text-danger">
              {errors.FechaNacimiento && "Se requiere la fecha de nacimiento"}
            </span>
          </div>
          <div className="d-flex justify-content-evenly mt-4">
            {activarAgregar ? (
              <button type="submit" className="btn btn-primary">
                Agregar
              </button>
            ) : (
              <button type="submit" className="btn btn-success">
                Modificar
              </button>
            )}
            <button
              type="button"
              className="btn btn-danger"
              onClick={(e) => handleClickCancelar(e)}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormularioClientes;
