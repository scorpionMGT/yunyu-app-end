// app/router/common.js
'use strict';
module.exports = app => {
  app.router.get('/api/common', app.controller.common.index);
};
