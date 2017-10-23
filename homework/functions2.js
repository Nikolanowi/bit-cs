    // 2. Write a function that combines two arrays by alternatingly taking elements

    function twoArr(arr1, arr2) {
        var final = [];

        for (var i = 0; i < arr1.length; i++) {
            final[2*i] = arr1[i];
        }

        for (var j = 0; j < arr2.length; j++) {
            final[2*j + 1] = arr2[j];
        }

        return final;
    }

    //console.log(twoArr([1,2,3,4,5,6,7,8,9], ["a","b","c","d","e","f","g","h"]));

    // 3. Write a function that rotates a list by k elements.

    function rotate(array, times) {
        var final = [];

        for (var i = times; i < array.length; i++) {
            final[i-times] = array[i];
        }

        for (var j = 0; j < times; j++) {
            final[array.length - times + j] = array[j]; 
        }

        return final;
    }

  //  console.log(rotate([1,2,3,4,5,6,7,8], 5));


// 8. Write a function to find the maximum and minimum elements. Function returns array.

function minimax(niz) {
    var min = niz[0];
    var max = niz[0];

    for (var i = 0; i < niz.length; i++) {
       if (niz[i] > max) {
           max = niz[i];
       }

       if (niz[i] < min) {
           min = niz[i];
       }
    }


    return [min, max];
}

// console.log(minimax([1,2,6,-5,33]));

// 13. Write a function to find all the numbers greater than the average.

