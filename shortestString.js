/* 
The function shortestString takes two string arguments: str1 and str2 and return the string which is shorter */

function shortestString(str1, str2){
    if(str1.length < str2.length){
        return str1;

    }
    return str2;        
}