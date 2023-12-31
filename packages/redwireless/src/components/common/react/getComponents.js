import { useAppState } from '@components/common/context/app';
import { get } from '@redsuperadmin/redwireless/src/lib/util/get';

/* eslint-disable global-require */
const { resolve } = require('path');
const { CONSTANTS } = require('@redsuperadmin/redwireless/src/lib/helpers');

export function getComponents() {
  const componentsPath = get(useAppState(), 'componentsPath');
  if (!componentsPath) {
    return {};
  } else {
    return require(resolve(
      CONSTANTS.ROOTPATH,
      '.redwireless/build/',
      componentsPath
    ));
  }
}
