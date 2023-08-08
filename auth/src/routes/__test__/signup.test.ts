import request from "supertest";
import { app } from "../../app";

describe("SIGN UP ", () => {
  it("Returns 201 on successfull signup", async () => {
    return request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(201);
  });

  it("Return 400 on invalid email", async () => {
    return request(app)
      .post("/api/users/signup")
      .send({
        email: "invalid",
        password: "password",
      })
      .expect(400);
  });

  it("Sets a Cookie", async () => {
    return request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .then((res) => {
        expect(res.get("Set-Cookie")).toBeDefined();
      });
  });

  it("Disallows duplicate emails", async () => {
    await request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(201);
    await request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(400);
  });
});
