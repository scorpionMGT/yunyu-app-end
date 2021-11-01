/*
 * @Author: your name
 * @Date: 2019-12-16 12:03:49
 * @LastEditTime: 2019-12-16 12:24:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \yunyu-app-end\app\controller\home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
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

module.exports = HomeController;
