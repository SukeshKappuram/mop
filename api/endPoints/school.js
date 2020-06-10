var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs')
var path = require('path')
var school = express.Router()
school.use(express.static(path.resolve(__dirname, "public")));
school.use(bodyparser.json({ limit: '5mb' }));
school.use(bodyparser.urlencoded({
    limit: '5mb',
    extended: true
}));
var config = require('../config');
const db = require('../db');
const pgp = db.$config.pgp;

school.get('/', (req, res, next) => {

});