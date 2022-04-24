//tesk 5 fibonachi array 
function fibonachiArray(length) {
    let arr = [];
    let a1 = 0;
    let a2 = 1;
    let element = 1;
    for (let i = 0; i < length; i++) {
        arr.push(element);
        element = a1 + a2;
        a1 = a2;
        a2 = element;
    }
    return arr;
}

console.log(fibonachiArray(3));
console.log(fibonachiArray(5));
console.log(fibonachiArray(2));