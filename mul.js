// Given a number , print it's multiplication table upto 10
function multiplier(num){
    let mul = 1;
    let out = "";
    for(let i = 1; i<= 10; i++){
        mul = num * i;
        out = `${num} * ${i} = ${mul}`;
        console.log(out);
    
    }
    
    
}

multiplier(2);
multiplier(2**1000);