
 
 // JS - data structures / data -types

 /*

    1. primitives

        1. string
        2. numbers
        3. boolean
        4. null
        5. undefined

        6. symbol ( es6 )

    2. reference
    
        --> objects

 */

// how to create objectes ?

/*

    var ref=new ConstructorFunction();

*/

// var person = new Object();
// person.name = 'Nag';
// person.age = 32;
// person.doWork = function () {
//     console.log('working.....');
// };

// delete person.age;

//------------------------------------------


// Literal style objects

// 1. Object

var emp = new Object();
emp.name = 'Nag';
emp.doWork = function () {
    console.log('working..');
}


// Literal style

var person = {
    name: 'Nag',
    doWork: function () {
        console.log('working..');
    }
};


// 2. Array

var arr = new Array();

// Literal style

var arr = [];


// 3. Reg Exp

var re = new RegExp('\\d{10}');

// Literal style

var re = /\d{10}/;

// 4. function

var add = new Function("n1", "n2", 'var res=n1+n2;return res;');

// Literal style

function sum(n1, n2) {
    var res=n1+n2;return res;
}

//--------------------------------------------------------

// how to access JS'obj properties


var person = { name: 'Nag' ,'full-name':'Nagabhushanam N' };

console.log(person.name);
console.log(person['full-name']);