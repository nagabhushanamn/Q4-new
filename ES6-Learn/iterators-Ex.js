


// var ids = [1, 2, 3];

// // var str = "abc";
// // // var person = {name:'Nag',age:32};

// // for (let ele of arr){
// //     console.log(ele);
// // }

// var it = ids[Symbol.iterator]();


//------------------------------------

var idMaker = {
    [Symbol.iterator]:function() {
        let id = 0;
        return {
            next:function() {
                return {
                    done: false,
                    value:id++
                }
            }
        };
    }
};

for (let id of idMaker) {
    console.log(id);
}
