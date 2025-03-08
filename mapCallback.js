//custom map function to apply a callback on each array element

function map(arr, cb){
    let newarr = [];
    for(let i = 0; i< arr.length; i++){
        newarr[i] = cb(arr[i], i);
    }
    return newarr;
}
module.exports = map;