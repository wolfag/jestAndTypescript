const express = require("express");
const axios = require("axios");
const { Server } = require("http");
const { createApp, SECRET_KEY } = require("./api");

import * as jwt from "jsonwebtoken";

describe("App", () => {
  let app: typeof Server;
  const port = 8080;
  const host = `http://localhost:${port}`;

  beforeEach((done) => {
    app = createApp().listen(port, done);
  });

  afterEach((done) => {
    app.close(done);
  });

  it("get data", async () => {
    interface Data {
      foo: string;
    }
    const res = await axios.default.get(`${host}/data`);
    expect(res.data).toEqual<Data>({ foo: "bar" });
  });

  it("auth success", async () => {
    const token = jwt.sign("token", SECRET_KEY);
    const res = await axios.default.post(
      `${host}/login`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(res.status).toBe(200);
  });

  it("auth fail", async () => {
    const token = jwt.sign("token", "fake key");
    const res = () =>
      axios.default.post(
        `${host}/login`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    // first way
    // try {
    //   await res();
    // } catch (error) {
    //   expect(error.response.status).toBe(401);
    // }

    // second way
    await expect(res).rejects.toHaveProperty("response.status", 401);
  });
});
