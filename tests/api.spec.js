const request = require('supertest')
const app = require('../index')

describe("GET /api/v2/users", () => {
    //uji fungsionalitas
    test("Return status: 200 and Users Data", async () => {
        const res = await request(app).get('/api/v2/users')
        expect(res.statusCode).toBe(200)
        // expect(res.body).toHaveProperty('status')
        // expect(res.body).toHaveProperty('code')
        // expect(res.body).toHaveProperty('message')
        // expect(res.body).toHaveProperty('data')
        // expect(res.body.data).toEqual(expect.any(Array))
        
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