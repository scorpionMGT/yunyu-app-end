"use strict";

const Controller = require("egg").Controller;

const imgsrcList = [
  {
    name: "test1",
    id: 1,
    url: "https://pic.3d66.com/thuimg/newcache/324/1050/1050246_1519304.jpg",
  },
  {
    name: "test2",
    id: 2,
    url: "https://pic.3d66.com/thuimg/newcache/324/1049/1049985_1519043.jpg",
  },
  {
    name: "test3",
    id: 3,
    url: "https://pic.3d66.com/thuimg/newcache/324/1050/1050472_1519530.jpg",
  },
  {
    name: "test4",
    id: 4,
    url: "https://pic.3d66.com/thuimg/newcache/324/1050/1050472_1519530.jpg",
  },
  {
    name: "test1",
    id: 5,
    url: "https://pic.3d66.com/thuimg/newcache/324/1050/1050246_1519304.jpg",
  },
  {
    name: "test2",
    id: 6,
    url: "https://pic.3d66.com/thuimg/newcache/324/1049/1049985_1519043.jpg",
  },
  {
    name: "test3",
    id: 7,
    url: "https://pic.3d66.com/thuimg/newcache/324/1050/1050472_1519530.jpg",
  },
  {
    name: "test4",
    id: 8,
    url: "https://pic.3d66.com/thuimg/newcache/324/1050/1050472_1519530.jpg",
  },
  {
    name: "test1",
    id: 9,
    url: "https://pic.3d66.com/thuimg/newcache/324/1050/1050246_1519304.jpg",
  },
  {
    name: "test2",
    id: 10,
    url: "https://pic.3d66.com/thuimg/newcache/324/1049/1049985_1519043.jpg",
  },
  {
    name: "test3",
    id: 11,
    url: "https://pic.3d66.com/thuimg/newcache/324/1050/1050472_1519530.jpg",
  },
  {
    name: "test4",
    id: 12,
    url: "https://pic.3d66.com/thuimg/newcache/324/1050/1050472_1519530.jpg",
  },
  {
    name: "test1",
    id: 13,
    url: "https://pic.3d66.com/thuimg/newcache/324/1050/1050246_1519304.jpg",
  },
  {
    name: "test2",
    id: 14,
    url: "https://pic.3d66.com/thuimg/newcache/324/1049/1049985_1519043.jpg",
  },
  {
    name: "test3",
    id: 15,
    url: "https://pic.3d66.com/thuimg/newcache/324/1050/1050472_1519530.jpg",
  },
  {
    name: "test4",
    id: 16,
    url: "https://pic.3d66.com/thuimg/newcache/324/1050/1050472_1519530.jpg",
  },
];

class PageController extends Controller {
  async list() {
    const { ctx } = this;
    console.log("ctx", ctx.request.body);
    ctx.body = {
      imgsrcList: imgsrcList,
    };
  }
}

module.exports = PageController;
