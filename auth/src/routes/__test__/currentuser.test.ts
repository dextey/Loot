import request from "supertest";
import { app } from "../../app";

describe("CURRENT USER", () => {
  it("Get details of the user", async () => {
    const postReq = await request(app)
      .post("/api/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(201);

    const response = await request(app)
      .get("/api/users/currentuser")
      .set("Cookie", postReq.get("Set-Cookie"))
      .send()
      .expect(200);

    expect(response.body.currentUser.email === "test@test.com");
  });
});
