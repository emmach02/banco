import supertest from "supertest";
import app from "../app.js";

app.listen(4004);

describe("GET /api/banco/localidades", () => {
    it("Deberia devolver u de estado 200 y todas las localidades", async () => {
        const res = await supertest.agent(app).get("/api/banco/localidades")

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    CodLocalidades: expect.any(Number),
                    Nombre: expect.any(String),
                    FechaFundacion: expect.any(String),
                    Activo: expect.any(Boolean)
                })
            ])
        )
    })
})

describe("GET /api/banco/localidades/:id", () => {
    it("Deberia retornar u de estado 200 y el Localidades con eLocalidades correspondiente", async () => {
        const res = await supertest.agent(app).get("/api/banco/localidades/3")

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.objectContaining({
                CodLocalidades: expect.any(Number),
                Nombre: expect.any(String),
                FechaFundacion: expect.any(String),
                Activo: expect.any(Boolean)
            })
        )
    })
})

describe("POST /api/banco/localidades", () => {
    it("Deberia retornar u de estado 200 y la Localidad", async () => {
        const datos = {
            Nombre: "Nicaragua",
            FechaFundacion: "2001-12-22"
        }

        const res = await supertest.agent(app).post("/api/banco/localidades").send(datos)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(
            expect.objectContaining(
                {
                    CodLocalidades: expect.any(Number),
                    Nombre: expect.any(String),
                    FechaFundacion: expect.any(String)
                }
            )
        )
    })
})

describe("PUT /api/banco/localidades/:id", () => {
    it("Deberia devolver u de estado 200 y la Localidad", async () => {
        const datos = {
            Nombre: "Rio Cuarto",
            FechaFundacion: "2001-12-22"
        }

        const res = await supertest.agent(app).put("/api/banco/localidades/5").send(datos)

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.objectContaining({
                CodLocalidades: expect.any(Number)
            })
        )
    })
})

describe("DELETE /api/banco/localidades/:id", () => {
    it("Deberia devolver u de estado 200 y un mensaje de eliminado exitosamente", async () => {

        // Se tiene que cambiar el id para cada test para que se ejecute exitosamente el test
        const res = await supertest.agent(app).delete("/api/banco/localidades/9")

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.objectContaining({
                message: expect.any(String)
            })
        )
    })
})
