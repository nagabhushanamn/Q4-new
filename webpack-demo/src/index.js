

require('./styles.css') 
//var Please = require('pleasejs')
import Please from 'pleasejs';
var div = document.getElementById('color')
var button = document.getElementById('button')

// function changeColor() {
//   div.style.backgroundColor = Please.make_color()
// }
let changeColor = () => { div.style.backgroundColor = Please.make_color()}

debugger
let a = 12;
let b = 13;
let c = a + b;



button.addEventListener('click', changeColor)

