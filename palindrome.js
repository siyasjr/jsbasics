/* This function takes a word string and returns true if the word is a palindrome or false if it is not.
*/
function palindrome(string){
    let start = 0;
    let end = string.length -1;
    while(start < end){
        if(string[start] !== string[end]){
            return false;

        }
        start++;
        end--;
    }
    return true;
}