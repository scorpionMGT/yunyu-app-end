// app/router/user.js
module.exports = app => {
  app.router.get('/api/getUserInfo', app.controller.user.index);
};