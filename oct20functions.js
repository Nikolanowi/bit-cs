// 1. Write a function to convert a number from one base to another. 

// Samo ParseInt
function convert(num, base, newBase) {
    var deca = parseInt(num, base);
    return parseInt(deca, newBase);
}

//console.log(convert(255, 10, 16));

// ParseInt + toString()
function convert2(num, base, newBase) {
    return parseInt(num, base).toString(newBase);
}

//console.log(convert2(255, 10, 16));

// 2.Write a JavaScript function that reverse a number.

function reverse(digit) {
    var str = digit.toString();
    var rev = '';

    for (var i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev[0] == 0) {
        return rev;
    } else {
        return parseInt(rev);
    }
}

console.log(reverse(500));

//3. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation and numbers symbols are not included in the passed string.

function alpha(str) {
    var array = new Array();

    for (var i = 0; i < str.length; i++) {
        array[i] = str[i];
    }

    return array.sort();
}

// console.log(alpha("onomatopeja"));

// 5. Write a function to split a string and convert it into an array of words.

function split(str) {
    var array = [];
    var counter = 0;
    var begin = 0;

    for (var i = 0; i < str.length; i ++) {
        if (str[i] == ' ') {
            array.push(str.slice(begin, i));
            begin += i - begin;
            begin ++;
        }
        if (i == str.length - 1) {
            array.push(str.slice(begin, i+1));
        }
        
    }
    return array;
}

console.log(split("Ovde postoje cetiri reci"));

// 8. Write a function to capitalize the first letter of a string.

