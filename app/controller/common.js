'use strict';

const Controller = require('egg').Controller;

class CommonController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      username: 'maoguotao test',
      userId: 123456,
    };
  }

  async helloWorld() {
    const { ctx } = this;
    ctx.body = 'hello world';
  }
}

module.exports = CommonController;
