// app/router/login.js
module.exports = app => {
  app.router.post('/api/login', app.controller.login.index);
};