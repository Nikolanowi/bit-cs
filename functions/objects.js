function Home(name, doorType, kitchenSize, roommates, pet) {
    this.owner = name,
    this.door = doorType,
    this.kitchen = kitchenSize,
    this.roommates = roommates,
    this.pet = pet,
    this.whoLivesHere = function () {
        return "The owner is " + this.owner;
    }
}

function Home2(name, doorType) {
    return {
        owner : name,
        door : doorType
    }
}




var kuca = new Home("Shone", "Drvo", "Small", ["Stefan", "Nikola", "Milos"], "No pet");
var hotel= new Home("Aleksandar","iverica");

var newHome = Home2('someone', 'wood');
//console.log(newHome)


console.log(newHome.owner, kuca.owner);

var test = { opa: 'opa'};
var test2 = test;

//console.log(test === test2);

var promena = function (param) {
    param.opa = 0;
}

promena(test);
//console.log(test);


var ime = {
    name: "Ja",
    surrname: "Jaic"
}

var promeni = function (par) {
    par.name = "Ti";
    par.surrname = "Tiic";

    return ime;
}

console.log(promeni(ime));
