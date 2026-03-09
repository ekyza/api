import request from "supertest";

import app from "../../src/app";

describe("GET /api/users", () => {
  it("should return all users", async () => {
    const res = await request(app).get(`/api/users`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("data");
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
