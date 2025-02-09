function removeDuplicates(arr){
    const result = [];
    const newarr = arr.reduce( (acc, curr) => {     
        if(result.indexOf(curr) === -1){
            result.push(curr);
        }
        return result;
    }, result);
    return newarr;
    }
    module.exports = removeDuplicates;