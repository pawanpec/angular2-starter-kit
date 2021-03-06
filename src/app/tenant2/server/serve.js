require('reflect-metadata');
require('zone.js/dist/zone-node');
require('zone.js/dist/long-stack-trace-zone');

const http = require('http');
const constants = require('../../constants');

const HOST = constants.HOST;
const PORT = constants.PORT;

const PRIVATE_DIR = constants.PRIVATE_DIR;
const SERVER_NAME = constants.SERVER_NAME;

const app = require('./' + SERVER_NAME).app;

http.createServer(app).listen(PORT, HOST);
