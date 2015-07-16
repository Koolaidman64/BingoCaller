(function () {
    'use strict';
    var express = require('express');
    var http = require('http');
    var morgan = require('morgan');
    var expressApp = express();
    var server = http.createServer(expressApp);
    expressApp.set('port', process.env.PORT || 3000);
    expressApp.use(morgan('combined'));
    expressApp.set('view engine', 'html');
    expressApp.use(express.static(process.cwd() + '/.build/main-app/app'));
    module.exports = server;
})();