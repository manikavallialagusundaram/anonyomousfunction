//Rotate an array by k times
const rotateArray = (arr,k) => {
    const n = arr.length;
    k = k % n;
    for(var i=0;i<k;i++){
        const temp = arr.pop();
        arr.unshift(temp);
    }
    return arr;
};
const array = [1,2,3,4,5];
const rotations = 3;
const rotatedArray = rotateArray(array, rotations);
console.log("rotated array:",rotatedArray);