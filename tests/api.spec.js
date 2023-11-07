const request = require('supertest')
const app = require('../index')

describe("GET /api/v2/users", () => {
    //uji fungsionalitas
    test("Return status: 200 and Users Data", async () => {
        const res = await request(app).get('/api/v2/users')
        expect(res.statusCode).toBe(200)
        
        expect(res.body).toEqual(
            expect.objectContaining({
                status: 'success',
                code: 200,
                message: 'Success!',
                data: expect.any(Array)
            })
        )
    })
})
describe("POST /api/v2/users", () => {
    test("Return status: 200 and Users Data", async () => {
        const res = await request(app)
            .post('/api/v2/users')
            .send({
                name: "UserTest1",
                email: "usertest55@email.com",
                password: "1234"
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual(
            expect.objectContaining({
                status: 'success',
                code: 200,
                message: 'Data ditambahkan!',
                data: expect.any(Object)
            })
        )
    })
})