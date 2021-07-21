"use strict";

const Controller = require("egg").Controller;
const crypto = require('../../utils/crypto')
class LoginController extends Controller {
  async index() {
    const { ctx, app } = this;
    console.log('app.config.env', app.config.env)
    const params = ctx.request.body;
    let username = crypto.DecryptFunc(params.username)
    let password = crypto.DecryptFunc(params.password)
    const token = app.jwt.sign({
      username
    }, app.config.jwt.secret, {
      expiresIn: "1 days",
    })
    const flag = username === 'maoguotao' && password === 'Mao!123456'
    const code = flag ? 200 : 201
    const data = flag ?  { token: token } : null
    const message = flag ? true : '用户名或者密码错误'
    ctx.body = {
        code,
        data,
        message,
        serverTime: Date.now(),
        version: "1.0.0",
      };
  }
}

module.exports = LoginController;
