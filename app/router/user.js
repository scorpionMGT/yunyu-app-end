// app/router/user.js
module.exports = app => {
  app.router.get('/api/getUserInfo', app.jwt, app.controller.user.index);
};