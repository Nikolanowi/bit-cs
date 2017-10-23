/* Write a program to check if the variable is a number and if it's a number
check if is divisible by 2. If yes print result if not show "X" */

var a = true;

if (typeof a == "number") {
    if (a % 2 == 0) {
        console.log("Rezultat je " + a/2);
    } else {
        console.log("Ostatak je 1")
    }
} else {
    console.log("Tip podatka nije broj!");
}

/* Write a program to check if the number is divisable by 3 and 5. 
If yes print that number. */

var b = 21;

if (b % 3 == 0 && b % 5 == 0) {
    console.log("Broj " + b + " je deljiv i sa 3 i sa 5");
} else {
    console.log("Broj nije deljiv iz prilozenog");
}

/* Write a program to check if the number is divisable by 2.
If yes print even, if not print odd. */

var c = -15;

c % 2 == 0 ? console.log ("even") : console.log("odd");

/* Write a program that compares two numbers and display the larger.
Result display in console. */

var d = 9;
var e = 31;

d > e ? console.log("Veci broj je " + d) : console.log("Veci broj je " + e);

/* Write conditional statement to find the sign of product of three numbers. 
Display result in console with specified sign. */

let f = -3;
let g = 5;
let h = 7;

f * g * h > 0 ? console.log("Znak ovog broja je +") : console.log("Znak ovog broja je -");

/* Write a conditional statement to sort three numbers. */

let i = 5;
let j = -8;
let k = 18;

if (i > j && i > k) {
    if (j > k) {
        console.log (i, j, k )
    } else {
        console.log(i, k, j);
    }
} else if (j > i && j > k) {
    if (i > k) {
        console.log(j, i, k) 
    } else {
        console.log(j, k, i)
    }
} else if (k > i && k > j) {
    if (i > j) {
        console.log(k, i, j)
    } else {
        console.log(k, j, i)
    }
}

/* Write a conditional statement to find the largest of five numbers. 
Display result in console */

let l = 10;
let m = -2;
let n = 21;
let o = - 35;
let p = 0;

if (l > m && l > n && l > o && l > p) {
    console.log("Najveci broj je: " + l);
}
if (m > l && m > n && m > o && m > p) {
    console.log("Najveci broj je: " + m);
}
if (n > m && n > l && n > o && n > p) {
    console.log("Najveci broj je: " + n);
}
if (o > m && o > n && o > l && o > p) {
    console.log("Najveci broj je: " + o);
}
if (p > m && p > n && p > o && p > l) {
    console.log("Najveci broj je: " + p);
}