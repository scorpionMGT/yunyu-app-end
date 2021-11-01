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

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: {
        list: [
          {
            name: 'maoguotao',
            mobile: '18716020616',
          },
        ],
      },
      message: true,
      result: true,
      serverTime: Date.now(),
      version: '1.0.0',
    };
  }
  async setAccountProps() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: ' 设置成功',
      message: true,
      result: true,
      serverTime: Date.now(),
      version: '1.0.0',
    };
  }
}

module.exports = UserController;
