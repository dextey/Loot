import request from "supertest";
import { app } from "../../app";

describe("CURRENT USER", () => {
  it("Get details of the user", async () => {
    const cookie = await global.signin();

    const response = await request(app)
      .get("/api/users/currentuser")
      .set("Cookie", cookie)
      .send()
      .expect(200);

    expect(response.body.currentUser.email === "test@test.com");
  });

  it("Returns null on not authenticated Request", async () => {
    const response = await request(app).get("/api/users/currentuser").send().expect(200);

    expect(response.body.currentUser).toBeNull();
  });
});
