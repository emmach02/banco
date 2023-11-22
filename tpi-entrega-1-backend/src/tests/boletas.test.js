
import supertest from "supertest";
import app from "../app.js";

app.listen(4001);

describe("GET /api/banco/boletas", () => {
    it("Deberia devolver un codigo de estado 200 y todas las boletas", async () => {
        const res = await supertest.agent(app).get("/api/banco/boletas")

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    NroBoleta: expect.any(Number),
                    Monto: expect.any(Number),
                    FechaOperacion: expect.any(String),
                    Descripcion: expect.any(String),
                    IdCuenta: expect.any(Number),
                    CodSucursal: expect.any(Number),
                    TipoMovimiento: expect.any(String)
                })
            ])
        )
    })
})

describe("GET /api/banco/boletas/:nro", () => {
    it("Deberia retornar un codigo de estado 200 y la boleta con el NroBoleta correspondiente", async () => {
        const res = await supertest.agent(app).get("/api/banco/boletas/3")

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.objectContaining({
                NroBoleta: expect.any(Number),
                Monto: expect.any(Number),
                FechaOperacion: expect.any(String),
                Descripcion: expect.any(String),
                IdCuenta: expect.any(Number),
                CodSucursal: expect.any(Number),
                TipoMovimiento: expect.any(String),
                Activo: expect.any(Boolean)
            })
        )
    })
})

describe("POST /api/banco/boletas", () => {
    it("Deberia retornar un codigo de estado 200 y la boleta", async () => {
        const datos = {
            Monto: 120.30,
            FechaOperacion: "2023-05-27",
            Descripcion: "Compra de ropa",
            IdCuenta: 4,
            CodSucursal: 3,
            TipoMovimiento: "Compra"
        }

        const res = await supertest.agent(app).post("/api/banco/boletas").send(datos)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(
            expect.objectContaining(
                {
                    NroBoleta: expect.any(Number),
                    Monto: expect.any(Number),
                    FechaOperacion: expect.any(String),
                    Descripcion: expect.any(String),
                    IdCuenta: expect.any(Number),
                    CodSucursal: expect.any(Number),
                    TipoMovimiento: expect.any(String),
                    Activo: expect.any(Boolean)
                }
            )
        )
    })
})

describe("PUT /api/banco/boletas/:nro", () => {
    it("Deberia devolver un codigo de estado 200 y el NroBoleta", async () => {
        const datos = {
            Monto: 155,
            FechaOperacion: "2023-05-30",
            Descripcion: "Compra de electrodomestico",
            IdCuenta: 1,
            CodSucursal: 2,
            TipoMovimiento: "Venta"
        }

        const res = await supertest.agent(app).put("/api/banco/boletas/3").send(datos)

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.objectContaining({
                NroBoleta: expect.any(Number)
            })
        )
    })
})

describe("DELETE /api/banco/boletas/:nro", () => {
    it("Deberia devolver un codigo de estado 200 y un mensaje de eliminado exitosamente", async () => {

        // Se tiene que cambiar el id para cada test para que se ejecute exitosamente el test
        const res = await supertest.agent(app).delete("/api/banco/boletas/10")

        expect(res.statusCode).toEqual(200)

        expect(res.body).toEqual(
            expect.objectContaining({
                message: expect.any(String)
            })
        )
    })
})
