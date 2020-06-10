var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs')
var path = require('path')
var securityManagement = express.Router()
securityManagement.use(express.static(path.resolve(__dirname, "public")));
securityManagement.use(bodyparser.json({ limit: '5mb' }));
securityManagement.use(bodyparser.urlencoded({
    limit: '5mb',
    extended: true
}));
var config = require('../config');
const db = require('../db');
const pgp = db.$config.pgp;

securityManagement.get('/', (req, res, next) => {

});