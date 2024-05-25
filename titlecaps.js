//Convert all the strings to title caps in a string array 
const array = ["welcome back meenu","how are you","enjoy your stay"];
const toTitleCase = function(str){
    return str.replace(/\w\S*/g,function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};
const TitleCasedArray = array.map(toTitleCase);
console.log(TitleCasedArray);
