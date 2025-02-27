class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }
push(element){
    this.items[this.count] = element;
    console.log(`${element} added at position ${this.count}`);
    this.count ++;
}

pop(){
    if(this.count === 0)
        { console.log(`Oh no!!The stack is empty. Nothing to pop()`);
    return null;998
    
        }

    let deletedItem = this.items[this.count -1];
    delete this.items[this.count -1];
    console.log(`${deletedItem} removed from position ${this.count -1}`);
    this.count --;
    return deletedItem;

}
}


const stack = new Stack();
stack.push(100);
stack.push(200);
stack.pop();
stack.pop();
stack.push(200)
stack.pop();
stack.push(500);
stack.push(700);
stack.push(900);
stack.pop();
stack.push(1100);
stack.pop();
stack.pop();
stack.pop();
stack.pop();




