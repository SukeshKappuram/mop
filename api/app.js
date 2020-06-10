var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs');
var path = require('path');
var app = express();
var logger = require('./logger');

var IdentityManagement = require(__dirname+'/endPoints/identityManagement');
var SecurityManagement = require(__dirname+'/endPoints/securityManagement');
var Organization = require(__dirname+'/endPoints/organization');
var Shared = require(__dirname+'/endPoints/shared');

var School = require(__dirname+'/endPoints/school');
var Business = require(__dirname+'/endPoints/business');
var Enterprise = require(__dirname+'/endPoints/enterprise');

app.use(express.static(path.resolve(__dirname, "public")));
app.use(bodyparser.json({limit:'5mb'}));
app.use(bodyparser.urlencoded({
    limit:'5mb',
    extended: true
}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Endpoints

app.use('/IdentityManagementEndPoint', IdentityManagement);
app.use('/SecurityManagementEndPoint', SecurityManagement);
app.use('/OrganizationEndPoint', Organization);
app.use('/SharedEndPoint', Shared);
app.use('/SchoolEndPoint', School);
app.use('/BusinessEndPoint', Business);
app.use('/EnterpriseEndPoint', Enterprise);

app.get('/', function (req, res, next) {

});

app.get('/build', function (req, res, next) {
    logger.info('Build Successful!');
});

app.get('/release', function (req, res, next) {
    logger.info('Release Successful!');
});

app.listen(3400, function (err) {
     if (err) {
         logger.error("Error in connecting server");
     } else {
         logger.info("Server Started http://localhost:3400/");
     }
 });