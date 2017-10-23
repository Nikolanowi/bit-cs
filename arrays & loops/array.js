// 1. zadatak

var arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log (arr[5], arr[9], arr[0]);


// 2. zadatak


var arr2 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(arr2[6]);

//3. zadatak

var arr3 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

console.log(arr3[0][3]);
console.log(arr3[2]);
console.log(arr3[2][1]);

var arr4 = [arr[5], arr[9], arr[0]];
console.log(arr4);

delete arr3[1];
console.log(arr3);
arr3[5]="true";
console.log(arr3);