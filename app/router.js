'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  require('./router/login')(app);
  require('./router/register')(app);
  require('./router/user')(app);
  require('./router/home')(app);
  require('./router/about')(app);
  require('./router/common')(app);
  router.get('/', controller.home.helloWorld);
};
