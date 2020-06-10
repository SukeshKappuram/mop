var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs')
var path = require('path')
var identityManagement = express.Router()
identityManagement.use(express.static(path.resolve(__dirname, "public")));
identityManagement.use(bodyparser.json({ limit: '5mb' }));
identityManagement.use(bodyparser.urlencoded({
    limit: '5mb',
    extended: true
}));
var config = require('../config');
const db = require('../db');
const pgp = db.$config.pgp;

identityManagement.get('/', (req, res, next) => {

});