// Zadaci 1 i 2

var day = 10;
var result = '';

switch (day) {
    case 1:
        result = "Monday";
        break;
    case 2:
        result = "Tuesday";
        break;
    case 3:
        result = "Wednesday";
        break;
    case 4:
        result = "Thursday";
        break;
    case 5:
        result = "Friday";
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result = "Sunday";
        break;

    default:
        result = "Input must be number between 1 and 7";
        break;
}

console.log(result);

//Zadatak 3

var day = 5;
var data = '';

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        data = "weekday";
        break;

    case 6:
    case 7:
        data = "weekend";
        break

    default:
        data = "Input must be number between 1 and 7";
        break;
}

console.log(data);


//Zadatak 4

var month = 5;
let hit = '';

switch (month) {
    case 1:
        hit = "jan";
        break;
    case 2:
        hit = "feb";
        break;
    case 3:
        hit = "mar";
        break;
    case 4:
        hit = "apr";
        break;
    case 5:
        hit = "may";
        break;
    case 6:
        hit = "jun";
        break;
    case 7:
        hit = "jul";
        break;
    case 8:
        hit = "aug";
        break;
    case 9:
        hit = "sep";
        break;
    case 10:
        hit = "oct";
        break;
    case 11:
        hit = "nov";
        break;
    case 12:
        hit = "dec";
        break;
    default:
        hit = "Input must be number between 1 and 12";
        break;
}
console.log(hit);

// Zadatak 5

var season = 5;
var top="";

switch (season) {
    case 1:
    case 2:
    case 12:
    
        season="winter";
        
        break;

    case 3:
    case 4:
    case 5:
    
        season="spring";
        break;

    case 6:
    case 7:
    case 8:
   
        season="summer";
        break;

    case 9:
    case 10:
    case 11:
    
        season="autumn";
        break;

    default:
        break;
}
console.log(season);

//Zadatak 6.

let grade = "A";
let answer = "";

switch (grade) {
    case "A":
        answer = "Good job!";
        break;
    case "B":
        answer = "Pretty good!";
        break;
    case "C":
        answer = "Passed.";
        break;
    case "D":
        answer = "Not so good...";
        break;
    case "F":
        answer = "Failed :/";
        break;
    default:
        answer = "Unknown grade";
        break;
}

console.log(answer);