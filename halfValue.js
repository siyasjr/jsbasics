/*The function halfValue takes an array of numbers and returns
 a new array with all the original values halved.
Odd numbers should be rounded up to the nearest whole number.


*/
function halfValue(array){
    const newArray = [];
    for(let i = 0; i< array.length; i++){
        if(array[i] % 2 !== 0){
        newArray.push((array[i] / 2) + 0.5);
    }
        if(array[i] % 2 === 0){
            newArray.push(array[i] / 2);
        }
}
return newArray;
}