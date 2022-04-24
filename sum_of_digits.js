/* tesk 4 4. Given a number.
 Write a function that calculates its sum of 
 the digits and if that sum
has more than 1 digit find the sum of digits of 
that number. Repeat that process if needed and
return the result.*/
function sumOfDigits(number) {
    let sum = 0;
    while (number) {
        sum = sum + number % 10;
        number = (number - number % 10) / 10;
    }
    return sum;
}

console.log(sumOfDigits(2143));

function extraSumOfDigits(number) {
    let sum = sumOfDigits(number);
    while (sum > 9) {
        sum = sumOfDigits(sum);
    }
    return sum;
}
console.log(extraSumOfDigits(29));
