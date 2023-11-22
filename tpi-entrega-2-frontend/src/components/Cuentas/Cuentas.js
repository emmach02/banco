import { useEffect, useState } from "react";
import { TablaCuentas } from "./shared/TablaCuentas.js";
import { BuscarCuentas } from "./shared/BuscarCuentas.js"
import { cuentasService } from "../../services/cuentas.service.js";
import { FormularioCuentas } from "./shared/FormularioCuentas.js";

const Cuentas = () => {
    const [cuentas, setCuentas] = useState([])
    const [idCuenta, setIdCuenta] = useState(0)
    const [activarFormulario, setActivarFormulario] = useState(false)
    const [activarAgregar, setActivarAgregar] = useState(true)

    useEffect(() => {
        const loadCuentas = async () => {
            const cuentas = await cuentasService.getCuentas()
            setCuentas(cuentas)
        }
        loadCuentas()
    }, [])

    return (
        <div className="mt-3">
            <h2>Cuentas</h2>
            {!activarFormulario ?
                (
                    <>
                        <BuscarCuentas {...{ setCuentas, setActivarAgregar, setActivarFormulario }}></BuscarCuentas>
                        <TablaCuentas {...{ cuentas, setActivarAgregar, setActivarFormulario, setIdCuenta, setCuentas }}></TablaCuentas>
                    </>
                ) :
                (
                    <FormularioCuentas {...{ activarAgregar, setActivarFormulario, idCuenta, setCuentas }}></FormularioCuentas>
                )}
        </div>
    );
};

export { Cuentas };
