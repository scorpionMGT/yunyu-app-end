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

class ClusterController extends Controller {
  async cluster() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: {
        page: {
          begin: 0,
          end: 20,
          length: 20,
          pageCount: 1,
          pageNo: 1,
          totalRecords: 25,
        },
        result: [
          {
            id: 1,
            name: "string",
            clusterId: 2,
            clusterName: "string",
            total: 3,
            occupy: "string",
            surplus: 4,
            usageRate: "string",
            highestUsageRate: "string",
            highestUsageRateTime: "string",
            busiResPools: [
              { name: "string", value: 1 },
              { name: "string1", value: 2 },
            ],
          },
        ],
      },
      message: true,
      result: true,
      serverTime: Date.now(),
      version: "1.0.0",
    };
  }
  async delete() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: '',
      message: '删除成功',
      result: true,
      serverTime: Date.now(),
      version: "1.0.0",
    }
  }
}

module.exports = ClusterController;
