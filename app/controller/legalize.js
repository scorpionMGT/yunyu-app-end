/*
 * @Author: your name
 * @Date: 2019-12-16 12:03:49
 * @LastEditTime: 2019-12-16 12:24:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \yunyu-app-end\app\controller\home.js
 */
"use strict";

const Controller = require("egg").Controller;

class LegalizeController extends Controller {
  async query() {
    const { ctx } = this;
    console.log('this.', ctx.request.body)
    let params = ctx.request.body
    ctx.body = {
      code: 200,
      data: {
        page: {
          begin: 0,
          end: 20,
          length: 20,
          pageCount: 1,
          pageNo: params.page.pageNo,
          totalRecords: 25,
        },
        result: [
          {
            id: 1,
            userId: 12,
            userName: 'maoguotao',
            companyName: '瑞云科技',
            certificationPictureVoList: [{
              companyPic: 'https://pic.3d66.com/thuimg/newcache/324/1117/1117808_1609353.jpg',
              cardHeadsPic: 'https://pic.3d66.com/thuimg/newcache/324/1117/1117619_1609028.jpg',
              cardTailsPic: 'https://pic.3d66.com/thuimg/newcache/324/1117/1117732_1609228.jpg',
            }],
            createdDate: '2020-04-16T02:49:22.000+0000',
            status: 1,
            operaUser: 'maoguotao',
            remark: 'remark'
          },
        ],
      },
      message: true,
      result: true,
      serverTime: Date.now(),
      version: "1.0.0",
    };
  }
  async approved() {
    const { ctx } = this;
    ctx.body = {
        code: 200,
        message: true,
        data: {
            result: '验证通过'
        },
        result: true,
        serverTime: Date.now(),
        version: "1.0.0",
    }
  }
  async reject() {
    const { ctx } = this;
    ctx.body = {
        code: 200,
        message: true,
        result: true,
        data: '驳回验证',
        serverTime: Date.now(),
        version: "1.0.0",
    }
  }
}

module.exports = LegalizeController;
