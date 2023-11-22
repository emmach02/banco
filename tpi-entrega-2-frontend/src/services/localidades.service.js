import axios from "axios"

const getAll = async () => {
    const res = await axios.get(`http://localhost:4000/api/banco/localidades`)
    return res.data
}

const getLocalidades = (filtros) => {
    if (!filtros) {
        return getAll()
    }
    return getByFilters(filtros)
}

const getByFilters = async (filtros) => {
    const Localidades = await getAll()

    if (filtros.name !== "") {
        return Localidades
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

    return Localidades.sort((a, b) => {
        const orden = filtros.orden === "ascendente" ? a.Nombre < b.Nombre : a.Nombre > b.Nombre

        if (orden) {
            return 1
        }
        else {
            return -1
        }
    })
}

const getLocalidad = async (CodLocalidades) => {
    const res = await axios.get(`http://localhost:4000/api/banco/localidades/${CodLocalidades}`)
    return res.data
}

const deleteLocalidad = async (CodLocalidades) => {
    const res = await axios.delete(`http://localhost:4000/api/banco/localidades/${CodLocalidades}`)
}

const agregarLocalidad = async (Localidad) => {
    await axios.post(`http://localhost:4000/api/banco/localidades`, Localidad)
}

const actualizarLocalidad = async (CodLocalidades, Localidad) => {
    await axios.put(`http://localhost:4000/api/banco/localidades/${CodLocalidades}`, Localidad)
}

const LocalidadesService = {
    getLocalidades,
    getLocalidad,
    deleteLocalidad,
    agregarLocalidad,
    actualizarLocalidad
}

export default LocalidadesService