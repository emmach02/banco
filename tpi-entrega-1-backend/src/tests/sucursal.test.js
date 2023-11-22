import supertest from "supertest";
import app from "../app.js";

app.listen(4005);

describe("GET /api/banco/sucursales", () => {
    it("Deberia devolver un codigo de estado 200 y todas las sucursales", async () => {
        const res = await supertest.agent(app).get("/api/banco/sucursales")

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    CodSucursal: expect.any(Number),
                    Nombre: expect.any(String),
                    InicioActividad: expect.any(String),
                    CodLocalidad: expect.any(Number),
                    Activo: expect.any(Boolean)
                })
            ])
        )
    })
})

describe("GET /api/banco/sucursales/:codSuc", () => {
    it("Deberia retornar un codigo de estado 200 y la sucursal en función del Código ingresado", async () => {
        const res = await supertest.agent(app).get("/api/banco/sucursales/1")

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.objectContaining({
                CodSucursal: expect.any(Number),
                Nombre: expect.any(String),
                InicioActividad: expect.any(String),
                CodLocalidad: expect.any(Number),
                Activo: expect.any(Boolean)
            })
        )
    })
})

// EN EL POST SI LOS DATOS { } SON IGUALES SIEMPRE NUNCA LO GENERA
describe("POST /api/banco/sucursales", () => {
    it("Deberia retornar un codigo de estado 200 y la sucursal", async () => {
        const datos = {
            Nombre: "Sucursal Prueba10",
            InicioActividad: "2005-1-23",
            CodLocalidad: 6,
        }

        const res = await supertest.agent(app).post("/api/banco/sucursales").send(datos)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(
            expect.objectContaining(
                {
                    CodSucursal: expect.any(Number),
                    Nombre: expect.any(String),
                    InicioActividad: expect.any(String),
                    CodLocalidad: expect.any(Number),
                    Activo: expect.any(Boolean)
                }
            )
        )
    })
})

describe("PUT /api/banco/sucursales/1", () => {
    it("Deberia devolver un codigo de estado 200 y el Código Sucursal", async () => {
        const datos = {
            Nombre: "Sucursal Washington",
            InicioActividad: "2003-03-29",
            CodLocalidad: 10
        }

        const res = await supertest.agent(app).put("/api/banco/sucursales/1").send(datos)

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.objectContaining({
                CodSucursal: expect.any(Number)
            })
        )
    })
})


// DEBEMOS DE MODIFICAR EL ID INGRESADO EN EL SUPERTEST - SI NO EXISTE ESE FALLA
describe("DELETE /api/banco/sucursales/:codSuc", () => {
    it("Deberia devolver un codigo de estado 200 y un mensaje de eliminado exitosamente", async () => {

        // Se tiene que cambiar el id para cada test para que se ejecute exitosamente el test
        const res = await supertest.agent(app).delete("/api/banco/sucursales/5")

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.objectContaining({
                message: expect.any(String)
            })
        )
    })
})
