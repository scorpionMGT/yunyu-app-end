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
    "/api/qjc/admin/user/findUserCertificationInfo",
    controller.legalize.query
  );
  router.post(
    "/api/qjc/admin/user/checkUserCertificationInfo",
    controller.legalize.approved
  );
  router.post(
    "/api/qjc/admin/user/checkUserCertificationInfo",
    controller.legalize.reject
  );
  router.post(
    "/api/qjc/admin/virtual/machine/Record/createRecord",
    controller.machine.detail
  );
  router.post(
    "/api/qjc/admin/virtual/Record/findById",
    controller.machine.detailLog
  );
  router.post(
    "/api/qjc/admin/user/list",
    controller.user.list
  );
  router.post(
    "/api/qjc/admin/user/list/setAccountProps",
    controller.user.setAccountProps
  );
};
