"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/api/getUserInfo", controller.home.index);
  router.post(
    "/api/qjc/resource_center/material/findMaterials",
    controller.page.list
  );
  router.post("/api/qjc/admin/cluster", controller.cluster.cluster);
  router.post(
    "/api/qjc/admin/hardwareResourcesPool/query",
    controller.cluster.cluster
  );
  router.post(
    "/api/qjc/admin/hardwareResourcesPool/delete",
    controller.cluster.delete
  );
  router.post(
    "/api/qjc/admin/user/legalize/query",
    controller.legalize.query
  );
};
