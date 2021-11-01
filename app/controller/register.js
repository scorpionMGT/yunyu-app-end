'use strict';

const Controller = require('egg').Controller;
const crypto = require('../../utils/crypto');
class RegisterController extends Controller {
  async index() {
    const { ctx } = this;
    const params = ctx.request.body;
    const username = crypto.DecryptFunc(params.username);
    const password = crypto.DecryptFunc(params.password);
    const userInfo = await ctx.service.user.create({ username, password });
    const code = userInfo ? 200 : 201;
    const data = userInfo ? { info: '注册成功' } : null;
    const message = userInfo ? true : '用户名已存在';
    ctx.body = {
      code,
      data,
      message,
      serverTime: Date.now(),
      version: '1.0.0',
    };
  }
}

module.exports = RegisterController;
