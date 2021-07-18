// app/router/home.js
module.exports = app => {
  app.router.get('/api/home', app.controller.home.index);
};