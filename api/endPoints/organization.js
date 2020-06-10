var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs')
var path = require('path')
var organization = express.Router()
organization.use(express.static(path.resolve(__dirname, "public")));
organization.use(bodyparser.json({ limit: '5mb' }));
organization.use(bodyparser.urlencoded({
    limit: '5mb',
    extended: true
}));
var config = require('../config');
const db = require('../db');
const pgp = db.$config.pgp;

organization.get('/', (req, res, next) => {

});