// app/service/user.js
'use strict';
const Service = require('egg').Service;
class UserService extends Service {

  async create(params) {
    const userList = await this.app.mysql.select('users');
    const user = await this.app.mysql.get('users', { username: params.username });
    if (user && user.username) return null;
    const result = await this.app.mysql.insert('users', { ...params, user_id: userList.length + 1 });
    return result;
  }

  async read(username) {
    const user = await this.app.mysql.get('users', { username });
    return user;
  }

  async update(username) {
    const user = await this.app.mysql.get('users', { username });
    return user;
  }

  async delete(username) {
    const user = await this.app.mysql.get('users', { username });
    return user;
  }
}
module.exports = UserService;
