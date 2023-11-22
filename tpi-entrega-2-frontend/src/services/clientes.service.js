import axios from "axios"
const apiUrl = process.env.URL 

const getAll = async () => {
    const res = await axios.get(`${apiUrl}/api/banco/clientes`)
    return res.data
}

const getClientes = (filtros) => {
    if (!filtros) {
        return getAll()
    }
    return getByFilters(filtros)
}

const getByFilters = async (filtros) => {
    const clientes = await getAll()

    if (filtros.name !== "") {
        return clientes
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

    return clientes.sort((a, b) => {
        const orden = filtros.orden === "ascendente" ? a.Nombre < b.Nombre : a.Nombre > b.Nombre

        if (orden) {
            return 1
        }
        else {
            return -1
        }
    })
}

const getCliente = async (codigoCliente) => {
    const res = await axios.get(`${apiUrl}/api/banco/clientes/${codigoCliente}`)
    return res.data
}

const deleteCliente = async (codigoCliente) => {
    await axios.delete(`${apiUrl}/api/banco/clientes/${codigoCliente}`)
}

const agregarCliente = async (cliente) => {
    await axios.post(`${apiUrl}/api/banco/clientes`, cliente)
}

const actualizarCliente = async (codigoCliente, cliente) => {
    await axios.put(`${apiUrl}/api/banco/clientes/${codigoCliente}`, cliente)
}

const clientesService = {
    getClientes,
    getCliente,
    deleteCliente,
    agregarCliente,
    actualizarCliente
}

export default clientesService