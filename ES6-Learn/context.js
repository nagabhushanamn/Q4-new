
"use strict";

// console.log(a);
// var a = 12;


// var a = 12;

// function func() {
//     console.log(a);
//     // var a = 13;
// }

// func();

//-----------------------


// var a = 12;
// function f1() {
//     function f2() {
//         console.log(a);
//     }
//     var a = 13;
//     return f2;
// }

// var f2Func = f1();
// f2Func();

//-----------------------



// var a = 12; // global scoped

// function f() {
//     var a = 12; // function scoped
// }

// function f() {

//     {
//         var a = 100;
//     }

//     console.log(a);    
// }

// f();

//-------------------------------


// var updateFuncs = [];

// for (let i = 0; i < 2; i++){

//     updateFuncs.push(function () { 
//         return i;
//     });
// }

// console.log(updateFuncs[0]());

//-------------------------------

// var PI = 3.14;
// Object.defineProperty(window, 'PI', { writable: false });
// PI = 0;

