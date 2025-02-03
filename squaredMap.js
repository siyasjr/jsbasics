//Given an array of elements in , return an array with each element squared:


const squared = require('./squared');

function squaredMap(arr){
    return arr.map(squared);
}
module.exports = squaredMap;