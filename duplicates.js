const removeDuplicates=(arr) =>{
    return arr.filter((item,index)=>arr.indexOf(item)===index)
};
const arrayWithDuplicates = [1,2,3,4,5,2,4,5,1,6,6,7,8,9,9,8,7];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log("arrayWithoutDuplicates:", arrayWithoutDuplicates);