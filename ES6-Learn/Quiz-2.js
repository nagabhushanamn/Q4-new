




function sessionStart() {

    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching JS");
            var self = this;
            function doLearn() {
                console.log(this.name + ' learning JS from ' + self.name);
            }
            return doLearn;
        }
    };

    var nagTnr = new Trainer('Nag');
    learnFunc = nagTnr.doTeach();

    var emp = { name: 'kannan' };
    learnFunc.call(emp);

}

sessionStart();