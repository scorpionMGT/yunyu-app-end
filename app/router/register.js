// app/router/login.js
module.exports = app => {
  app.router.post('/api/register', app.controller.register.index);
};