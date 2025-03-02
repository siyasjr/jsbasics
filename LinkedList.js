class Node{          // create a class Node
        constructor(data){
            this.data = data;
            this.next = null;
            }
        }
        
class LinkedList{   // create a class LinkedList which can link node classes together and perform various methods on it.
        constructor(){
            this.head = null;
            

            }
        
        addFirst(node){  // adding a node at the start of the LinkedList
            
            node.next = this.head;
            this.head = node;    //should handle both conditions where no nodes present at the time of adding and if nodes already present at the time of adding.
            }
        
        addLast(node) {           // adding a node at the end of the LinkedList
            if(!this.head){       // no nodes present
                this.head = node;     // set the newly added node as the current head
                return;
                }
            
                let ref = this.head;  // initializing a reference variable to temporarily refer head and for traversal through the list 
            while(ref.next){      // as long as there is next to the ref, continue the loop
                ref = ref.next;       // traverse through the list by moving ref to the next subsequent nodes;
                }
                ref.next = node;      // after reaching the last node , set the next of this last node to the newly added node.
            }
            
        indexOf(node){        //method to find the index(0 - based) of a given node in a list.
                let idx  = 0;
                let ref = this.head;
            
            while(ref){
                if(node === ref){
                return idx;
            }
                ref = ref.next;
                idx++;
            }
            return -1;
            }
            
        removeAt(index){   // method to remove a specific node at a specific index
                let idx = 0;
                let ref = this.head;
                if(!this.head){
                    return;
                }
                
                if(index === 0){
                    this.head = ref.next;
                    return;
                    }
                while(idx < (index- 1) && ref.next){
                    ref = ref.next;
                    idx++;
                    }
                    if(ref.next){
                    ref.next = ref.next.next;
                    }
                }
        display(){
            let str = "";
            let ref = this.head;
                    
            while(ref){
                str += str ?  ` -> ${ref.data}` : `${ref.data}`;
                ref = ref.next;
            }
            console.log(str);
            
        }
    
}

/*const node1 = new Node(200);
const node2 = new Node(300);
const node3 = new Node(400);
const node4 = new Node(500);
const node5 = new Node(600);

let lk = new LinkedList();
lk.addLast(node1);
lk.addLast(node2);
lk.addLast(node3);
lk.addLast(node4);
lk.display();

lk.removeAt(0);
lk.removeAt(0);
lk.removeAt(0);
lk.removeAt(0);
lk.display();

lk.addFirst(node1);
lk.addFirst(node2);
lk.addFirst(node3);
lk.addFirst(node4);
lk.addFirst(node5);
lk.display();



console.log(lk.indexOf(node1));
*/




                    
                
            
