class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    
    insert(item){  
        const newNode = new Node(item);
        if(this.root === null){
            this.root = newNode;
        }
    }

    search(value){
        if(this.root === null){
            return false;
        }        
        
    }   
    
}