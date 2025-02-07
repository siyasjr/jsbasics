// Determine which is larger, the accumulator or the currentValue. 
// Whichever is larger, return it! Then it will become the accumulator for the next iteration.

function largest(arr){
    const newarr = arr.reduce( (acc, curr) => (curr > acc ? curr : acc) ,1);
    return newarr;
}
module.exports = largest;