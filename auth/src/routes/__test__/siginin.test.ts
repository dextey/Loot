import request from "supertest";
import { app } from "../../app";

describe("SIGN IN", () => {
  beforeAll(() => {
    request(app).post("/api/users/signup").send({
      email: "test@test.com",
      password: "password",
    });
  });

  it("Return an error 400 on non exist signin", async () => {
    return request(app)
      .post("/api/users/signin")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(400);
  });

  it("Return a cookie on successfull login", async () => {
    await request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(201);

    const reponse = await request(app)
      .post("/api/users/signin")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(200);

    expect(reponse.get("Set-Cookie")).toBeDefined();
  });
});
