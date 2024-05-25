//Print odd numbers in an array 
const odd = [1,2,3,4,5,6,7,8,9,10];
const oddNumbers = odd.filter(function(i){
    return (i % 2 !==0);
})
console.log(oddNumbers);