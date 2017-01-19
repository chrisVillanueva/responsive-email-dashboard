'use strict';

const DEV = 'development';
const PROD = 'production';
const ENV = process.env.NODE_ENV || DEV;
const PORT = Number(process.env.PORT || 3000);
const isDev = (ENV === DEV);
const isProd = (ENV === PROD);

module.exports = {
  DEV,
  PROD,
  ENV,
  PORT,
  isDev,
  isProd
};
