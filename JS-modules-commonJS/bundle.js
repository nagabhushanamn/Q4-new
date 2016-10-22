(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){



var a = require('./package1');

console.log('main.js');

a.doWork();


},{"./package1":2}],2:[function(require,module,exports){


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
},{"./b":3,"./c":4}],3:[function(require,module,exports){


var o = {
    doWork: function () {
        console.log('B work...');
    }
};


module.exports = o

},{}],4:[function(require,module,exports){


var o = {
    doWork: function () {
        console.log('C work...');
    }
};


module.exports = o

},{}]},{},[1]);
