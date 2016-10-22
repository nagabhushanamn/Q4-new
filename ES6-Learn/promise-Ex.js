


var hotel = {
    getFood: function () {

        var promise = new Promise(function (resolve, reject) {

            setTimeout(function () { 
                console.log('hotel1 resolving promose...');
                resolve('RICE');
                //reject('SORRY');
            },5000);

        });

        return promise;
    }
};



var hotel2 = {
    getFood: function () {

        var promise = new Promise(function (resolve, reject) {

            setTimeout(function () { 
                console.log('hotel2 resolving promose...');
                resolve('Sambar');
                //reject('SORRY');
            },8000);

        });

        return promise;
    }
};

var trainer = {
    doTeach: function () {
        console.log('teaching..js');
        console.log('hungry..requesting food...');
        var promise1 = hotel.getFood(); // async call
        var promise2 = hotel2.getFood(); // async call
        console.log('got promise.. deferring actions to future');
        var promise=Promise.race([promise1,promise2]).then(function (results) {
            console.log('yummy with ' + results);
            return "half-rice";
        }, function (reason) {
            console.log('error...'+reason);
            });
        

        promise.then(function (remainingResult) {
            console.log(remainingResult);
        });

        console.log('teaching further... end.');

    }
};

trainer.doTeach();