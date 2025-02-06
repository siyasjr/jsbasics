//Given an array of values, return an array of unique values.


function unique(array){
    const ul = array.filter(function(el, i){
        return (array.indexOf(el) === i);
    });
    return ul;
}
module.exports = unique;