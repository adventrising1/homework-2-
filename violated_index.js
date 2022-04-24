// tesk 1. Given an array of numbers
// which is almost sorted in ascending order.
//  Find the index
// where sorting order is violated.
function violatedIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return i + 1;
        }
    }
    return -1;
}

//console.log(violatedIndex([2, 12, 15, 48, 64]));
//console.log(violatedIndex([-9, -4, -4, 3, 12, 4, 5]));