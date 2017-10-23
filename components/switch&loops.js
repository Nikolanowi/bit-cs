/* Switch sluzi kada imamo vise IF/ELSE opcija radi bolje citljivosti koda.
Keyword SWITCH, prati ga case, komanda, i na kraju break. Default za sve ostale slucajeve. */

var a = 1;
var result = '';

switch (a) {
    case 1:
        result = 'Number 1';
        break;
    case '1':
        result = "String 1";
        break;
    default :
        result = "I\'m not sure";
        break;
}

console.log(result);

/* Mozemo pakovati vise caseva za slucaj da imamo isti rezultat. Uvek break nakon jednog rezultatata */

var car = 'bmw';
var result = '';

switch (car) {
    case 'vw':
    case 'audi':
    case 'bmw':
        result = 'Great german car!!';
        break;
    case 'fiat':
        result = 'Great Italian car!!';
        break;
    default:
        result = "Not available";
        break;
}

console.log(result);

// Zadaci za domaci: 
