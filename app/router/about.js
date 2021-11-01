// app/router/about.js
'use strict';
module.exports = app => {
  app.router.get('/api/about', app.controller.about.index);
};
