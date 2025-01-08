/* This function countVowelstakes in a string and counts
 how many vowels there are in the word. 
 And it also handles both lowercase and uppercase vowels.

*/const vowels = ['a','e','i','o','u'];

function countVowels(string){
    let count = 0;
    for(let i = 0; i<string.length; i++){
        if(vowels.includes(string[i].toLowerCase())){
            count++;

        }
    }
    return count;
}