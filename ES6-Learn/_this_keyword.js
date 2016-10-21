

// why we need 'this' keyword ?

// var person = {
//     pname: 'Nag',
//     sayName: function () {
//         console.log('im '+this.pname);
//     }
// };

// // person.sayName();

// var p = person;
// person = { pname: 'Ria' };

// p.sayName();

//---------------------------------------

// function sayNameForAll() {
//     console.log('im '+this.name);
// }

// // var p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name) } };
// // var p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name) } };


// let p1 = { name: 'Nag', sayName: sayNameForAll };
// let p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // im ??   // function-invocation ( context owned by global-obj , this==> global-obj)
// p1.sayName();    // im Nag  // method invocation   ( context owned by invoker-obj )
// p2.sayName();    // im Ria


//----------------------------------------


// greet utility

var greetUtil = {
    sayName: function (message,from) {
        console.log(message+' im '+this.name+" : "+from);
    }
};

// greetUtil.sayName();

var p1 = { name: 'Nag' };
var p2 = { name: 'Ria' };


// greetUtil.sayName.call(p1,"Hello","BLR");
// greetUtil.sayName.call(p2,"Hi","CHN");

// greetUtil.sayName.apply(p1,["Hello","BLR"]);
// greetUtil.sayName.apply(p2,["Hi","CHN"]);

// var newF = greetUtil.sayName.bind(p1, "Hello", "BLR");

// on greet-event on p1
// newF();

//--------------------------------------------------------------


function Person(name,age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log('im '+this.name);
    }
    this.sayAge = function () {
        console.log('im '+this.age+" old");
    }
}

var p1 = new Person('Nag', 32);  // constructor invocation ( context owned by new-obj)



//---------------------------------------------

// in JS , we can invoke func in 4 ways

/*

    1. function invocation  ( this --> global obj )
    2. method invocation    ( this --> invoker-obj )
    3. constructor invocation ( this --> new-obj  )
    4. call/apply/bind nvocation       ( this --> arg-obj  )

*/