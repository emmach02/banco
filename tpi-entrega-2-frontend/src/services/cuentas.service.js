import axios from "axios"
const apiUrl = process.env.URL 

const getAll = async () => {
    const res = await axios.get(`${apiUrl}/cuentas`)
    return res.data
}

const getCuentas = (filtros) => {
    if (!filtros) {
        return getAll()
    }
    return getByFilters(filtros)
}

const getByFilters = async (filtros) => {
    const cuentas = await getAll()

    if (filtros.tipoCuenta !== "") {

        return cuentas
            .filter(c => c.TipoCuenta.toLowerCase()
                .includes(filtros.tipoCuenta.toLowerCase()))
            .sort((a, b) => {
                const orden = filtros.orden === "ascendente" ? a.TipoCuenta < b.TipoCuenta : a.TipoCuenta > b.TipoCuenta

                if (orden) {
                    return 1
                }
                else {
                    return -1
                }
            })
    }

    return cuentas.sort((a, b) => {
        const orden = filtros.orden === "ascendente" ? a.TipoCuenta < b.TipoCuenta : a.TipoCuenta > b.TipoCuenta

        if (orden) {
            return 1
        }
        else {
            return -1
        }
    })
}

const getCuenta = async (idCuenta) => {
    const res = await axios.get(`${apiUrl}/cuentas/${idCuenta}`)
    return res.data
}

const deleteCuenta = async (idCuenta) => {
    await axios.delete(`${apiUrl}/cuentas/${idCuenta}`)
}

const agregarCuenta = async (cuenta) => {
    await axios.post(`${apiUrl}/cuentas`, cuenta)
}

const actualizarCuenta = async (idCuenta, cuenta) => {
    console.log(cuenta)
    await axios.put(`${apiUrl}/cuentas/${idCuenta}`, cuenta)
}

const cuentasService = {
    getCuentas,
    getCuenta,
    deleteCuenta,
    agregarCuenta,
    actualizarCuenta
}

export { cuentasService }
