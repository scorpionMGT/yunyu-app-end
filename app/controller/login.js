"use strict";

const Controller = require("egg").Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    let params = ctx.request.body
    console.log('params', params)
    ctx.body = {
        code: 200,
        data: {},
        message: true,
        result: true,
        serverTime: Date.now(),
        version: "1.0.0",
    };
  }
}

module.exports = LoginController;
