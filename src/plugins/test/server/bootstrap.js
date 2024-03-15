"use strict";

module.exports = ({ strapi }) => {
  const config = strapi.config.get("plugin.test");
  console.log(config);
};
