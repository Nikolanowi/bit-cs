// Function can be passed as an argument to other functions for example

function one() {
    return 1;
}
function two() {
    return 2;
}

function invokeAdd(a, b) {
    return a() + b();
}

/*
    Kada prosledimo funkciju A funkciji B, i ona izvrsi funckiju umesto nas, to se zove CALLBACK FUNCTION 

        -   mogu da se koriste bez imena
        -   mozemo delegirati odgovornost pozivanja drugoj funciji
        -   poboljsan performans
*/

// Zadatak : funckija prima broj parametara. Argumente mnozi sa 2 pa poveca za 1

function multiply(a, b, callback) {
    var arr = [];

    for (var i = 0; i < arguments.length - 1; i++) {
        var element = (arguments[i] * 2) * (arguments[i] * 2);
        var callbackElement = callback(element)
        arr[i] = callbackElement;
    }
    return arr;
}

console.log(multiply(2, 3, function(num) { return num + 1}));


function newTask(arr, callback1, callback2) {
    for (var i = 0; i < arr.length; i++) {
        var element = callback2(callback1(arr[i]));
        arr[i] = element;
    }
    return arr;
}

console.log(newTask([5, 10, 20, 11],
    function (num) {
        return num + 1;
    },
    function (num) {
        return num / 10;
    }
));


// Funckija koja se odmah izvrsava - Immediate functions
// Mogu da vrate vrednost i da ih sacuvamo u varijabli

(
    function (mood) {
        console.log('Osecam se ' + mood);
    }
) ('sjajno!') ;

// Postoje unutrasnje i spoljasnje funkcije. Unutrasnja nije vidljiva na globalu
// Funckija moze da vrati funkciju. Da bi pozvao obe funckije, sintaksa je :   a()();


