// app/router/about.js
module.exports = app => {
  app.router.get('/api/about', app.controller.about.index);
};