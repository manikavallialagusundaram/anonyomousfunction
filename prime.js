//Return all the prime numbers in an array 
const primeNumbers = (n) =>{
 if(n<=1) return false;
 for(var i=2;i<=Math.sqrt(n);i++){
 if(n % i ===0)
 return false;
 }
 return true;
 };
const numbers = [1,2,3,4,5,6,7,8,9,10];
const prime = numbers.filter((x)=>primeNumbers(x));
console.log(prime);

