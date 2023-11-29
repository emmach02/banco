import axios from "axios"

const getAll = async () => {
    const res = await axios.get(`http://15.229.7.58:4000/cuentas`)
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
    const res = await axios.get(`http://15.229.7.58:4000/cuentas/${idCuenta}`)
    return res.data
}

const deleteCuenta = async (idCuenta) => {
    await axios.delete(`http://15.229.7.58:4000/cuentas/${idCuenta}`)
}

const agregarCuenta = async (cuenta) => {
    await axios.post(`http://15.229.7.58:4000/cuentas`, cuenta)
}

const actualizarCuenta = async (idCuenta, cuenta) => {
    console.log(cuenta)
    await axios.put(`http://15.229.7.58:4000/cuentas/${idCuenta}`, cuenta)
}

const cuentasService = {
    getCuentas,
    getCuenta,
    deleteCuenta,
    agregarCuenta,
    actualizarCuenta
}

export { cuentasService }
