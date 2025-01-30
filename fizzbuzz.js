function fizzbuzz(numbers){
    let newstring = "";
    for(let i = 0; i < numbers.length; i++){
        
            if (numbers[i] % 3 === 0 && numbers[i] % 5 !== 0){
                newstring += "fizz";
        
            }
            else if (numbers[i] % 5 === 0 && numbers[i] % 3 !== 0){
                newstring += "buzz";
            }
             
            
            else if ((numbers[i] % 3 === 0 && numbers[i] % 5 === 0)) {
            newstring += "fizzbuzz";    
        }
    }
    return newstring;
}
module.exports = fizzbuzz;