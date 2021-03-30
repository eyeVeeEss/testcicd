import request from 'supertest';
import { app } from '../index';

describe("test THe root path", () => {
    test("It should response the GET method", async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
    })
})