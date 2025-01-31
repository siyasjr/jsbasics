// THis function will sort the numbers ascending (1,2,3...) and return the sorted array.
function sortUp(array) {
    const sarray = array.sort(function comparison(a,b) {
        return a - b;

    })
return sarray;
}

module.exports = sortUp;