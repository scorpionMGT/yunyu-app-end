'use strict';

const Controller = require('egg').Controller;
const crypto = require('../../utils/crypto');
class LoginController extends Controller {
  async index() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    const username = crypto.DecryptFunc(params.username);
    const password = crypto.DecryptFunc(params.password);
    const userInfo = await ctx.service.user.read(username);
    const token = app.jwt.sign({
      username,
    }, app.config.jwt.secret, {
      expiresIn: '1 days',
    });
    const flag = userInfo && username === userInfo.username && password === userInfo.password;
    const code = flag ? 200 : 201;
    const data = flag ? { token } : null;
    const message = flag ? true : '用户名或者密码错误';
    ctx.body = {
      code,
      data,
      message,
      serverTime: Date.now(),
      version: '1.0.0',
    };
  }
}

module.exports = LoginController;
