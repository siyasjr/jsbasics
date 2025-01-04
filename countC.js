/* This function takes a string str as its only argument 
and return the number of c's found in the string. 
It must count both lower-case c and upper-case C. */ 

function countC(str){
    let count = 0;
    for(let i = 0; i< str.length; i++){
        if(str[i].toLowerCase() === 'c'){
            count++;
        }
    }
    return count;
}
// console.log(countC("Cat is capable of cwawling through a car")); => 4