function isEven(myNum) {
    if (myNum % 2 == 0) {
        return myNum + " je paran!";
    } else {
        return myNum + " je neparan";
    };
};

console.log(isEven(13));


function isItDivisible(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return true;
    }
    return false;
}

function minMax(max, min) {
    min = min || 0;
    var sum = 0;
    
    for (var i = min; i < max; i++) {
         if (isItDivisible(i)) {
            sum += i;
        };
    };

    return sum;
}

// console.log(minMax(70, 6));



var integers = [23, 14, -2, 6, 12];

function sumAndProduct(arr) {
    var sum = 0;
    var prod = 1;
    for (var i in arr) {
        sum += arr[i];
        prod *= arr[i];
    }
    return "Suma je: " + sum + " a proizvod je: " + prod;
}

//console.log(sumAndProduct(integers));

var myArray = [1, 5, 7, null, true, 'Marina'];

function myConcat(someArray) {
    var wordToBe = '';
    for (var i in someArray) {
        wordToBe += someArray[i] + ' ';
    }
    return wordToBe;

}
// console.log(myConcat(myArray));

var looksLikeMath = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];

function printElements(deepArray) {
    for (var i in deepArray) {
        console.log("row : " + i);
        for (var j in deepArray[i]) {
            console.log(" " + deepArray[i][j]);
        };
    };
}

// printElements(looksLikeMath);

function sumOfSquares(num1, num2, num3, num4, num5) {
    var sum = Math.pow(num1, 2) + Math.pow(num2, 2) + Math.pow(num3, 2) + Math.pow(num4, 2) + Math.pow(num5, 2);
    return sum;
}

//console.log(sumOfSquares(2,3,7,8,10));

var students = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];

function whatsMyGrade(score) {
    if (score < 60) {
        return 'F.';
    }
    else if (score < 70) {
        return 'D.';
    }
    if (score < 80) {
        return 'C.';
    }
    if (score < 90) {
        return 'B.';
    }
    if (score < 100) {
        return 'A.';
    }
    else {
        return 'Not a grade.';
    }

}
// console.log(whatsMyGrade(102));

function studentGrades(arrayOfStudents) {
    var sum = 0;
    for (var i in arrayOfStudents) {
        console.log(arrayOfStudents[i][0] + ' \'s grade is ' + whatsMyGrade(arrayOfStudents[i][1]));
        sum += arrayOfStudents[i][1];
    }
    return 'Prosek odeljenja je ' + whatsMyGrade(sum / arrayOfStudents.length);

}
//console.log(studentGrades(students));

function fizzBuzz(range,firstNum,secondNum){
    for (var i = 1; i < range;i++){
        if (i%firstNum===0 && i%secondNum === 0){
            console.log ('FizzBuzz');
        }
        else if(i% firstNum===0){
            console.log ('Fizz');
        }
        else if(i% secondNum===0){
            console.log('Buzz');
        }
        else {
            console.log(i + ' is not divisible with ' + firstNum + ' or ' + secondNum + '.');
        }
    }
    return;
}

fizzBuzz(21,2, 5);





