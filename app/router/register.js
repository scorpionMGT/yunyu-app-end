// app/router/login.js
'use strict';
module.exports = app => {
  app.router.post('/api/register', app.controller.register.index);
};
