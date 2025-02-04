// Given an array of booleans, keep only the true values (Using Array.prototype.filter)

function onlyTrue(arr){
    const ot = arr.filter(function(el){
        return (el === true);
    });
    return ot;
}
module.exports = onlyTrue;