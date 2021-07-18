// app/router/common.js
module.exports = app => {
  app.router.get('/api/common', app.controller.common.index);
};