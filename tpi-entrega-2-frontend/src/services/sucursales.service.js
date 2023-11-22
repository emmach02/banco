import axios from "axios"

const getAll = async () => {
    const res = await axios.get(`http://localhost:4000/api/banco/sucursales`)
    return res.data
}

const getSucursales = (filtros) => {
    if (!filtros) {
        return getAll()
    }
    return getByFilters(filtros)
}

const getByFilters = async (filtros) => {
    const sucursales = await getAll()

    if (filtros.name !== "") {
        return sucursales
            .filter(c => c.Nombre.toLowerCase().includes(filtros.nombre.toLowerCase()))
            .sort((a, b) => {
                const orden = filtros.orden === "ascendente" ? a.Nombre < b.Nombre : a.Nombre > b.Nombre

                if (orden) {
                    return 1
                }
                else {
                    return -1
                }
            })
    }

    return sucursales.sort((a, b) => {
        const orden = filtros.orden === "ascendente" ? a.Nombre < b.Nombre : a.Nombre > b.Nombre

        if (orden) {
            return 1
        }
        else {
            return -1
        }
    })
}

const getSucursal = async (codSucursal) => {
    const res = await axios.get(`http://localhost:4000/api/banco/sucursales/${codSucursal}`)
    return res.data
}

const deleteSucursal = async (codSucursal) => {
    await axios.delete(`http://localhost:4000/api/banco/sucursales/${codSucursal}`)
}

const agregarSucursal = async (sucursal) => {
    await axios.post(`http://localhost:4000/api/banco/sucursales`, sucursal)
}

const actualizarSucursal = async (codSucursal, sucursal) => {
    await axios.put(`http://localhost:4000/api/banco/sucursales/${codSucursal}`, sucursal)
}

const sucursalesService = {
    getSucursales,
    getSucursal,
    deleteSucursal,
    agregarSucursal,
    actualizarSucursal
}

export default sucursalesService