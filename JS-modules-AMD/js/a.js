
define('js/a', ['js/b','js/c'], function (bmod,cmod) {

    bmod.doWork();
    cmod.doWork();

    var o = {
        doWork: function () {
            console.log('A work...');
        }
    };

    return o

});