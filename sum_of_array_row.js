// tesk 2. Given an array consisting from the arrays of numbers 
//(like a two-dimensional array).
//Find sum of each row and print them as an array
function sumOfArrayRow(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = sumOfArray(arr[i]);
    }
    return result;
}

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArrayRow([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));
console.log(sumOfArrayRow([[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]]));