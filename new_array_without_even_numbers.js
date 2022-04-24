// tesk 3. Given an array of integers.
// Write a function that return new array from first array,
//where removed even numbers,
// and odd numbers was multiplied with new array length
function lengthOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            sum++;
        }
    }
    return sum;
}
function creatNewArrayWithOddMembers(arr) {
    let result = [];
    let multiplier = lengthOfArray(arr);
    if (multiplier == 0) {
        return result;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            result.push(arr[i] * multiplier);
        }
    }
    return result;
}
console.log(creatNewArrayWithOddMembers([5, 4, 78, 0, -3, 7]));
console.log(creatNewArrayWithOddMembers([2, 4, 6, 88]));