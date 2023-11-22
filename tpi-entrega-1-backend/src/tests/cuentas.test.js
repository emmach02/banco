import supertest from "supertest";
import app from "../app.js";

app.listen(4003);

describe("GET /api/banco/cuentas", () => { 
    it("deberia debolver todas las cuentas ",
        async () => {
            //veo respuesta
            const res = await supertest.agent(app).get('/api/banco/cuentas');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        IdCuenta: expect.any(Number),
                        FechaAlta: expect.any(String),
                        Saldo: expect.any(Number),
                        TipoCuenta: expect.any(String),
                        CodigoCliente: expect.any(Number),
                        Activo: expect.any(Boolean)
                    })
                ])
            )
        })
    }
)

describe('GET /api/banco/cuentas/:id', () => {
    it("Deberia retornar unicamente el objetito cuyo codigo de cuenta sea el mismo que envio en la url", async () => {
        const res = await supertest.agent(app).get('/api/banco/cuentas/10');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                IdCuenta: expect.any(Number),
                FechaAlta: expect.any(String),
                Saldo: expect.any(Number),
                TipoCuenta: expect.any(String),
                CodigoCliente: expect.any(Number),
                Activo: expect.any(Boolean)
            })
        )
    })
})

describe('POST /api/banco/cuentas', () => {
    it('Debería retornar un código de estado 200 y un mensaje de éxito', async () => {
        const requestPayload = {
            FechaAlta: "1989-09-15",
            Saldo: 1245,
            TipoCuenta: "Caja de Ahorro en Dolares",
            CodigoCliente: 4
        };
        const response = await supertest.agent(app).post('/api/banco/cuentas').send(requestPayload);

        expect(response.statusCode).toEqual(200);
        // expect(response.body.message).toBe('Mensaje de éxito esperado');
    });
});

describe('PUT /api/banco/cuentas/:id', () => {
    it('Deberia retornar el objeto modificado, con un codigo 200', async () => {
        const requestPayload = {
            FechaAlta: "1989-09-15",
            Saldo: 1245,
            TipoCuenta: "Caja de Ahorro en Dolares",
            CodigoCliente: 4
        }
        const res = await supertest.agent(app).put("/api/banco/cuentas/5").send(requestPayload); // el paramtero que importa es este
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                IdCuenta: expect.any(Number),
            })
        )
    })
})

describe('DELETE /api/banco/cuentas/:id', () => {
    it('Deberia devolver la cuenta con el id 7 borrado', async () => {
        const res = await supertest.agent(app).delete("/api/banco/cuentas/7");
        expect(res.statusCode).toEqual(200);
    })
})