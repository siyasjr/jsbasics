/* function createCounter

What this function does:
if given a number n , it returns a couter funtion which initially returns n . When subsequently called,  each time it returns n+1, n+2 etc */

function createCounter(n){            // function declaration of createCouter fn  
    let count = n;                    // Initializing the count variable and set it to n
    return function counter(){        // returning a new counter function inside the createCounter function  
        const current = count;        // Setting the current value as count . initially it would be n
        count += 1;                   // Incrementing the count by 1
                return current;       // return the current expression
        
    }
}


 ** 