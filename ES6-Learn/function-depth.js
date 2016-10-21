




// 1. function declaration

// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,13));

//-----------------------------

// 2. function expression

// console.log(add(12,13));

// var add = function (n1,n2) {
//     return n1 + n2;
// }

// console.log(add(12,13));

//-----------------------------

// functions as values

// function sayHello() {
//     console.log('hello');
// }

// var sayHi = sayHello;

// function as args

// function greet(f) {
//     if (f) {
//         f();
//         return;
//     }
//     console.log('hello..');
// }

// greet();
// greet(function () { console.log('ola') });



// function as  return  vakues

// function teach() {
//     function leanr() {
        
//     }
//     return learn;
// }

// var learnFunc=teach();

//------------------------------------

// function reflect(a,b) {
//     console.dir(arguments);
//     return a;
// }

// console.log(reflect(12,13,14,15));

//-----------------------------------


// function f(a, b) {
    
//     // if (!a) {
//     //     a = 0;
//     // }

//     a = a || 0;
    
// }

// f();

//-----------------------------------

// let nums = [10,25,25,75];
// // let max = Math.max(12, 13, 50, 14);
// // let max = Math.max(nums[0],nums[1]);  // manual spreading..
// let max = Math.max(...nums);
// console.log(max);


// let a = [5, 6, 7];
// let s = "567";
// let b = [0, 1, 2, 3, 4, ...s, 8, 9, 10];



//--------------------------------------

