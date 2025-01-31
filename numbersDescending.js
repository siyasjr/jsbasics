// This function will sort an array of numbers in descending order and return the array.
function sortDown(array) {
    const sarray = array.sort(function comparison(a,b){
        return b - a;
    })
return sarray;
}

module.exports = sortDown;