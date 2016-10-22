

var b = require('./b');
var c = require('./c');


b.doWork();
c.doWork();

var o = {
    doWork: function () {
        console.log('A work...');
    }
};

module.exports = o;