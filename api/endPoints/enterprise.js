var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs')
var path = require('path')
var enterprise = express.Router()
enterprise.use(express.static(path.resolve(__dirname, "public")));
enterprise.use(bodyparser.json({ limit: '5mb' }));
enterprise.use(bodyparser.urlencoded({
    limit: '5mb',
    extended: true
}));
var config = require('../config');
const db = require('../db');
const pgp = db.$config.pgp;

enterprise.get('/', (req, res, next) => {

});