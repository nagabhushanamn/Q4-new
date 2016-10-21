


// 
var service = {
    teachJS: function () {
        console.log(this);
        console.log(this.tnrName+" teaching JS");
    }
}

var tnr = {tnrName:'Ria'};


var btn = document.getElementById('teachBtn');
//btn.addEventListener('click',service.teachJS);

// btn.addEventListener('click', function () { 
//     service.teachJS();
// });

btn.addEventListener('click',service.teachJS.bind(tnr));
