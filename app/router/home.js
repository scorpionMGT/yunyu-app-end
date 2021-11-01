// app/router/home.js
'use strict';
module.exports = app => {
  app.router.get('/api/home', app.controller.home.index);
};
