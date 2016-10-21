

function teach(sub) {
    console.log('teaching ' + sub);
    var notes = sub + " notes";
    var i = 100;
    function learn() {
        console.log('learning with '+notes);
    }    
    //learn();
    console.log('teaching finished...');
    return learn;
}


var learnFunc = teach('JS');  // contect creacted  with args + local

learnFunc();
learnFunc();
