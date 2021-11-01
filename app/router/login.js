// app/router/login.js
'use strict';
module.exports = app => {
  app.router.post('/api/login', app.controller.login.index);
};
