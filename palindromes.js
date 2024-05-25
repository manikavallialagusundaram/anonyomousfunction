//Return all the palindromes in an array
const palindromesNumbers = (n) => {
    return n === n.split('').reverse().join('');

}
const numbers = ["level","mom","dad","pop"];
const palindrome = numbers.filter((x)=>palindromesNumbers(x));
console.log(palindrome);






