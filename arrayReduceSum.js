// In the reduce function, two arguments are provided, an accumulator and the 
// current value. In the case of summing numbers, the accumulator is the sum after each iteration. 
// The current value will be each element in turn.


function sum(arr){
    const newarr = arr.reduce( (acc,curr) => acc + curr);
    return newarr;
}
module.exports = sum;