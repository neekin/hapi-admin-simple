"use strict";
const pkg = require("./package");
const _ = require("lodash");


// 引入依赖的插件
const adminPlugin = require("./lib/plugins/admin")
const resources = require('./lib/plugins/registerResouces')
exports.plugin = {
  pkg,
  register: async function (server, options) {
    if (options.admin) {
      let adminOptions = _.merge(adminPlugin.options, options.admin);
      adminPlugin.options = adminOptions;
    }
    if (!adminPlugin.options.resources) {
      adminPlugin.options.resources = resources;
    } else {
      adminPlugin.options.resources = _.merge(
        resources,
        adminPlugin.options.resources
      );
    }

    if (options.admin) {
      let adminOptions = _.merge(adminPlugin.options, options.admin);
      adminPlugin.options = adminOptions;
    }
    if (!adminPlugin.options.resources) {
      adminPlugin.options.resources = resources;
    } else {
      adminPlugin.options.resources = _.merge(
        resources,
        adminPlugin.options.resources
      );
    }
    console.log('简单管理界面注册成功')
    await server.register([adminPlugin]);
  },
};
