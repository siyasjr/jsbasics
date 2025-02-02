//Given an array of strings, sort the strings in descending order and return the resulting sorted array.
 function sortStringsDown(array) {
    return array.sort((a,b) => b.localeCompare(a));
   
}

module.exports = sortStringsDown;