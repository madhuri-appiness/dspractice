class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert  first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }


    //insert at index
    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
        }
        const node = new Node(data);
        let current, previous;

        //set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // node before index
            count++;
            current = current.next; //  node after index
        }

        node.next = current;
        previous.next = node;
        this.size++;

    }

    //get node at index
    getNode(index) {
        let current = this.head;
       let count=0;

        while (current) {
            if (count == index) {
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
       return null; 
    }

    //remove node at index
    removeAt(index){
       if(index > 0 && index > this.size){
           return
       }

       let current = this.head;
       let previous;
       let count =0;
        if(index === 0){
            this.head = current.next;
        }else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
   
    //print list
    printList() {
        let current = this.head;
        while (current) {
            current = current.next;
        }
        console.log(ll)

    }

    clearAll(){
        this.head =null;
        this.size =0;
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
// ll.insertAt(500, 1);
// ll.getNode(3);
// ll.removeAt(0)

ll.printList();

//time complexity                           //space complexity
// Access	Search	Insertion	Deletion	Access	Search	Insertion	Deletion
// Θ(n)	    Θ(n)	Θ(1)	    Θ(1)	    O(n)	O(n)	O(1)	    O(1)