"use strict";

const Controller = require("egg").Controller;

class LoginController extends Controller {
  async index() {
    const { ctx, app } = this;
    const params = ctx.request.body
    const token = app.jwt.sign({
      username: params.username,
    }, app.config.jwt.secret, {
      expiresIn: "1 days",
    })
    ctx.body = {
        code: 200,
        data: {
          // username: params.username,
          // status: 1,
          // vipLevel: 1,
          token: token
        },
        message: true,
        result: true,
        serverTime: Date.now(),
        version: "1.0.0",
    };
  }
}

module.exports = LoginController;
