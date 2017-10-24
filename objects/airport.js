(function () {




})()



function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
        var res = this.name.concat(surname);
        return res;
    }

}

function Seat(number, category) {
    this.number = number;
    this.category = category || "e"
    this.getData = function () {
        this.getData = function () {
            if (this.category == "b") {
                return this.category = "business"

            } else
                return 
        }
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;


    }

    function Flight(relation, date, listOfPass) {
        this.relation = relatio;
        this.date = date;
        this.getData = function () {
            var let1 = this.relation + "," + this.date + "-->" + this.date + "," + this.relation;
            return let1;
        }

    }

    function Airport(name, listOfFlg) {
        name = "Nikola Tesla"
    }