//Do the below programs in anonymous function & IIFE
//Return median of two sorted arrays of the same size.
const median = (arr1,arr2) => {
    const combinedArray = [...arr1,...arr2].sort((a,b)=>a-b);
    //console.log(combinedArray);//1,2,3,4,5,6,
    const mid = Math.floor(combinedArray.length/2);//3
    //console.log(mid);
    if(combinedArray.length % 2 ===0){//(6%2===0)//0.12===0
        return (combinedArray[mid-1] + combinedArray[mid])/2;//6[2]+6[3]/2=15
    }else{
        return combinedArray[mid];//6(3)
    }
};
const arr1 = [1,3,5];
const arr2 = [2,4,6];
console.log("median:",median(arr1,arr2));


