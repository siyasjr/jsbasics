//Given an array of strings, keep only the strings whose length is at most 3.

function shortStrings(arr){
    const st = arr.filter(function(el){
        return (el.length <=3);
    });
    return st;
}
module.exports = shortStrings;