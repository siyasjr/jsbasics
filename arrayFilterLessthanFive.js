// Given an array of elements, find the elements whose value is less than 5. Return the resulting array. (Using Array.prototype.filter)

function lessThanFive(arr){
    const lsf = arr.filter(function(el){
        return (el < 5);
    });
    return lsf;
}
module.exports = lessThanFive;