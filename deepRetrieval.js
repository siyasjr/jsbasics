// retrieve a prop that is deeply nested within objects
// i.e. { prop: { prop: { prop: 3 }}} => 3
function deepRetrieval(obj) {
    
}

function deepRetrieval(obj){
    let ref = obj;
    while(typeof ref.prop === "object" ){
        ref = ref.prop;
    }
    if(typeof ref.prop !== "object"){
        return ref.prop;
    }
}
module.exports = deepRetrieval;