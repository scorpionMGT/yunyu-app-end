/*
 * @Author: your name
 * @Date: 2019-12-16 12:03:49
 * @LastEditTime: 2019-12-16 16:19:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi1
 * @FilePath: \yunyu-app-end\config\plugin.js
 */
"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors: {
    enable: true,
    package: 'egg-cors',
  },
    // 跨域配置
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  }
};

// exports.cors = {
//   enable: true,
//   package: 'egg-cors',
// };
