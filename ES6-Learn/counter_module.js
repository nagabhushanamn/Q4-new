

// function init() {
//     var count = 0;  //  private

//     // public    
//     return {
//         doCount: function () {
//             count++;
//         },
//         getCount: function(){
//             return count;
//         }
//     };

// }

// var counter = init();

//------------------------------------

const counter=(function () {
    var count = 0;  //  private

    // public    
    return {
        doCount: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    };

})();