var fs = require('fs');
function log(_content, _context = 'all') {
    switch(_context) {
        case 'all':
            console.log(_content);
            writeToFile(_content);
            break;
        case 'file':
            writeToFile(_content);
            break;
        case 'console':
            console.log(_content);
            break;
    }
};

function warn(_content, _context = 'all') {
    switch(_context) {
        case 'all':
            console.warn(_content);
            writeToFile(_content);
            break;
        case 'file':
            writeToFile(_content);
            break;
        case 'console':
            console.warn(_content);
            break;
    }
};

function error(_content, _context = 'all') {
    switch(_context) {
        case 'all':
            console.error(_content);
            writeToFile(_content);
            break;
        case 'file':
            writeToFile(_content);
            break;
        case 'console':
            console.error(_content);
            break;
    }
};

function info(_content, _context = 'all') {
    switch(_context) {
        case 'all':
            console.info(_content);
            writeToFile(_content);
            break;
        case 'file':
            writeToFile(_content);
            break;
        case 'console':
            console.info(_content);
            break;
    }
};

function writeToFile(_content){
    _curDir = __dirname+'\\logger\\';
    if (!fs.existsSync(_curDir)){
        fs.mkdirSync(_curDir);
    }
    fs.appendFileSync(_curDir + getCurrentDate() + '.log', '\n' + new Date(Date.now()).toLocaleString() + ' : ' + _content, 'utf8', (err) => {
        if (err){
            fs.writeFileSync(_curDir + getCurrentDate() + '.log', '\n' + new Date(Date.now()).toLocaleString() + ' : ' + _content, 'utf8', (err) => {
                if (err)
                    console.log(err);
            });
        }
    });
}

function getCurrentDate(){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    return year + "-" + month + "-" + day;
}

module.exports = { log, warn, info, error }