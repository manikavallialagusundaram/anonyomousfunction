//Sum of all numbers in an array 
const num = [10,50,100,200];
const sum = num.reduce((acc,ele)=> acc+ele, 0);
console.log(sum);