import supertest from "supertest";
import app from "../app.js";

app.listen(4002);

describe("GET /api/banco/clientes", () => {
    it("Deberia devolver un codigo de estado 200 y todos los clientes", async () => {
        const res = await supertest.agent(app).get("/api/banco/clientes")

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    CodigoCliente: expect.any(Number),
                    Nombre: expect.any(String),
                    Apellido: expect.any(String),
                    Telefono: expect.any(Number),
                    FechaNacimiento: expect.any(String),
                    Activo: expect.any(Boolean)
                })
            ])
        )
    })
})

describe("GET /api/banco/clientes/:id", () => {
    it("Deberia retornar un codigo de estado 200 y el cliente con el CodigoCliente correspondiente", async () => {
        const res = await supertest.agent(app).get("/api/banco/clientes/2")

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.objectContaining({
                CodigoCliente: expect.any(Number),
                Nombre: expect.any(String),
                Apellido: expect.any(String),
                Telefono: expect.any(Number),
                FechaNacimiento: expect.any(String),
                Activo: expect.any(Boolean)
            })
        )
    })
})

describe("POST /api/banco/clientes", () => {
    it("Deberia retornar un codigo de estado 200 y el cliente", async () => {
        const datos = {
            Nombre: "Tomas",
            Apellido: "Figueroa",
            Telefono: 3853453467,
            FechaNacimiento: "2001-12-22"
        }

        const res = await supertest.agent(app).post("/api/banco/clientes").send(datos)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(
            expect.objectContaining(
                {
                    CodigoCliente: expect.any(Number),
                    Nombre: expect.any(String),
                    Apellido: expect.any(String),
                    Telefono: expect.any(Number),
                    FechaNacimiento: expect.any(String),
                    Activo: expect.any(Boolean)
                }
            )
        )
    })
})

describe("PUT /api/banco/clientes/:id", () => {
    it("Deberia devolver un codigo de estado 200 y el CodigoCliente", async () => {
        const datos = {
            Nombre: "Nahuel",
            Apellido: "Lopez",
            Telefono: 351356783
        }

        const res = await supertest.agent(app).put("/api/banco/clientes/2").send(datos)

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.objectContaining({
                CodigoCliente: expect.any(Number)
            })
        )
    })
})

describe("DELETE /api/banco/clientes/:id", () => {
    it("Deberia devolver un codigo de estado 200 y un mensaje de eliminado exitosamente", async () => {

        // Se tiene que cambiar el id para cada test para que se ejecute exitosamente el test
        const res = await supertest.agent(app).delete("/api/banco/clientes/10")

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.objectContaining({
                message: expect.any(String)
            })
        )
    })
})