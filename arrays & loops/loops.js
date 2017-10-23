// 1. zadatak

for (var i = 0; i <= 15; i++) {
    if(i % 2 == 0) {
        console.log("Broj " + i + " je paran!");
    } else {
        console.log("Broj " + i + " nije paran!");        
    }
}

// 2. zadatak
var array=[1,2,3,4,5,6,7];

var sum = 0;
var notsum = 1;

for (var i in array) {
  sum += array[i];
  notsum *= array[i];
   console.log(array[i]);
}

 console.log('Suma je :' + sum);
 console.log('Proizvod je :' + notsum);

// 3.
 var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum += i;

    }
}
console.log("Suma je " + sum);

// 5. Zadatak

var a = [
        [1, 2, 1, 24], 
        [8, 11, 9, 4], 
        [7, 0, 7, 27]
    ];

    for (var i =0; i < a.length; i++) {
        console.log(a[i]);
    }

// 6. Zadatak

var sum = 0;

for (var i = 1; i < 20; i++) {
    sum += i * i ;
}

console.log(sum);

// 8. Zadatak

for (var i=1; i<100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

// 4. Zadatak

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var result = '';

for (var i in x) {
    result = result + ' ' + x[i];
}

console.log(result);

var grades = [80, 77, 88, 95, 68];
var students = ["David", "Marko", 'Dany', "John", "Thomas"];
var sum = 0;
var avg;

for (var j in grades) {
    sum += grades[j];
}
avg = sum / grades.length;

if (avg >80){
console.log("Prosecna ocena je C"  )
}
console.log ("Prosecna ocena je: " + avg);


for (var i in grades) {
    if (grades[i] > 90 && grades[i] <= 100) {
        console.log(students[i] + " je dobio A");
    } else if (grades[i] > 80 && grades[i] <= 90) {
        console.log(students[i] + " je dobio B");
    } else if (grades[i] > 70 && grades[i] <= 80) {
        console.log(students[i] + " je dobio C");
    } else if (grades[i] > 60 && grades[i] <= 70) {
        console.log (students[i] + " je dobio D")
    } else {
        console.log(students[i] + " je dobio F ili nije ni polagao");
    }
}

var grades = [
    ["David", 80],
    ["Marko", 77],
    ["Dany", 88],
    ["John", 95],
    ["Thomas", 68]
];
var sum = 0;
var avg;
for (var i in grades) {
    sum += grades[i][1];
}
console.log(sum / grades.length)