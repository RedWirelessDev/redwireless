const { resolve } = require('path');
const { getEnabledExtensions } = require('../../../bin/extension');
const { getCoreModules } = require('@redsuperadmin/redwireless/bin/lib/loadModules');
const { scanRouteComponents } = require('./scanForComponents');
const { getConfig } = require('../util/getConfig');
const { CONSTANTS } = require('../helpers');

// eslint-disable-next-line no-multi-assign
module.exports = exports = {};

exports.getComponentsByRoute = function getComponentsByRoute(route) {
  const modules = [...getCoreModules(), ...getEnabledExtensions()];
  const theme = getConfig('system.theme');
  if (theme) {
    return Object.values(
      scanRouteComponents(route, modules, resolve(CONSTANTS.THEMEPATH, theme))
    );
  } else {
    return Object.values(scanRouteComponents(route, modules));
  }
};
