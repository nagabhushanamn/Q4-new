



// es5
var person = {
    name: 'Nag',
    sayName: function () {
        //...
    }
};

// es6
var person = {
    name: 'Nag',
    sayName() {
        //...
    }
};


//-------------------------------



var v = 'name';
var product = {
    ['q4-'+v]: 'Laptop'
}

//-------------------------------

var o = {
    ['load products'](){
        console.log('loading products');
    }
};

o['load products']();

//-------------------------------


var name = 'Nag';
var age = 32;

// var person = {
//     name: name,
//     age:age
// }

// var person={name,age};

//---------------------------------



var person = {
    _name: 'Nag', // data property
    
    set name(newName) {
        if (newName) {
            this._name = newName;
        }
    },

    get name() {
        return this._name;
    }


};

person.name = ''; // set
console.log(person.name); // get