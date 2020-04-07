'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/getUserInfo', controller.home.index);
  router.post('/api/qjc/resource_center/material/findMaterials', controller.page.list);
};
