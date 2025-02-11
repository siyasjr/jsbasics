/*The double function here is almost complete!
We also want double to be able to handle when x is undefined.*/
function double(x) {
    return  x * 2 || 0;
}

module.exports = double;