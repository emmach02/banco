import axios from "axios"

const getAll = async () => {
    const res = await axios.get(`http://localhost:4000/api/banco/boletas`)
    return res.data
}

const getBoletas = (filtros) => {
    if (!filtros) {
        return getAll()
    }
    return getByFilters(filtros)
}

const getByFilters = async (filtros) => {
    const boletas = await getAll()

    if (filtros.descripcion !== "") {
        return boletas
            .filter(c => c.Descripcion.toLowerCase().includes(filtros.descripcion.toLowerCase()))
            .sort((a, b) => {
                const orden = filtros.orden === "ascendente" ? a.Descripcion < b.Descripcion : a.Descripcion > b.Descripcion

                if (orden) {
                    return 1
                }
                else {
                    return -1
                }
            })
    }

    return boletas.sort((a, b) => {
        const orden = filtros.orden === "ascendente" ? a.Descripcion < b.Descripcion : a.Descripcion > b.Descripcion

        if (orden) {
            return 1
        }
        else {
            return -1
        }
    })
}

const getBoleta = async (codigoBoleta) => {
    const res = await axios.get(`http://localhost:4000/api/banco/boletas/${codigoBoleta}`)
    return res.data
}

const deleteBoleta = async (codigoBoleta) => {
    await axios.delete(`http://localhost:4000/api/banco/boletas/${codigoBoleta}`)
}

const agregarBoleta = async (boleta) => {
    await axios.post(`http://localhost:4000/api/banco/boletas`, boleta)
}

const actualizarBoleta = async (codigoBoleta, boleta) => {
    await axios.put(`http://localhost:4000/api/banco/boletas/${codigoBoleta}`, boleta)
}

const boletasService = {
    getBoletas,
    getBoleta,
    deleteBoleta,
    agregarBoleta,
    actualizarBoleta
}

export default boletasService