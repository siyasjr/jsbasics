/*Given an array of elements, keep only the first 3 elements.
Return an array with only these three elements included.*/

function firstThree(arr){
    const ft = arr.filter(function (el, i){
        return (i < 3);
    });
    return ft;
}
module.exports = firstThree;
