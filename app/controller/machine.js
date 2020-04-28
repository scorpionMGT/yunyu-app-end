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

class MachineController extends Controller {
  async detail() {
    const { ctx } = this
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
            list: [
            {
                id: 1,
                createTime: Date.now(),
                productType: '标配',
                regionName: '深圳机房',
                sum: 10,
                successCount: 7,
                failCount: 3,
                progress: '70%',
            },
            ],
        },
        message: true,
        result: true,
        serverTime: Date.now(),
        version: "1.0.0",
    };
  }
  async detailLog () {
    const { ctx } = this
    ctx.body = {
        code: 200,
        data: {
            bean: {
                id: 1,
                createTime: Date.now(),
                regionName: 'string',
                sum: 10,
                successCount: 2,
                failCount: 1,
                producType: 'string'
            },
            flat: false,
            list: [
                {
                    id: 18,
                    taskRecordId: 5,
                    createTime: "2020-04-22T09:32:40.000+0000",
                    details: "虚拟机创建成功,机器ID:null"
                }
            ],
        },
        message: true,
        result: true,
        serverTime: Date.now(),
        version: "1.0.0",
    }
  }
}

module.exports = MachineController;
