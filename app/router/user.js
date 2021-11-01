// app/router/user.js
'use strict';
module.exports = app => {
  app.router.get('/api/getUserInfo', app.jwt, app.controller.user.index);
};
