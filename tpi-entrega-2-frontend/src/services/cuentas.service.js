import axios from "axios"
const BASE_URL = 'http://localhost:4000/api/banco'
const getAll = async () => {
    const res = await axios.get(`${BASE_URL}/cuentas`)
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
    const res = await axios.get(`${BASE_URL}/cuentas/${idCuenta}`)
    return res.data
}

const deleteCuenta = async (idCuenta) => {
    await axios.delete(`${BASE_URL}/cuentas/${idCuenta}`)
}

const agregarCuenta = async (cuenta) => {
    await axios.post(`${BASE_URL}/cuentas`, cuenta)
}

const actualizarCuenta = async (idCuenta, cuenta) => {
    console.log(cuenta)
    await axios.put(`${BASE_URL}/cuentas/${idCuenta}`, cuenta)
}

const cuentasService = {
    getCuentas,
    getCuenta,
    deleteCuenta,
    agregarCuenta,
    actualizarCuenta
}

export { cuentasService }
