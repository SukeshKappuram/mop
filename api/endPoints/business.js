var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs')
var path = require('path')
var business = express.Router()
business.use(express.static(path.resolve(__dirname, "public")));
business.use(bodyparser.json({ limit: '5mb' }));
business.use(bodyparser.urlencoded({
    limit: '5mb',
    extended: true
}));
var config = require('../config');
const db = require('../db');
const pgp = db.$config.pgp;

business.get('/', (req, res, next) => {

});