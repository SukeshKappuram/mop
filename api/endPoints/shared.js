var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs')
var path = require('path')
var shared = express.Router()
shared.use(express.static(path.resolve(__dirname, "public")));
shared.use(bodyparser.json({ limit: '5mb' }));
shared.use(bodyparser.urlencoded({
    limit: '5mb',
    extended: true
}));
var config = require('../config');
const db = require('../db');
const pgp = db.$config.pgp;

shared.get('/', (req, res, next) => {

});