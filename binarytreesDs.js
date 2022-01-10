class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }
}


class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    //tree size
    size() {
        return count;
    }

    //add node
    insert(value) {
        this.count++;

        let newNode = new Node(value);

        const serachTree = node => {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    serachTree(node.left)
                }
            }
            else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode;
                }
                else {
                    serachTree(node.right)
                }
            }

        }

        serachTree(this.root);

    }

    //min value
    min() {
        let current = this.root;

        //tranverse untill no node in left
        while (current.left) {
            current = current.left;
        }
        return current.value;
    }

    //max value
    max() {
        let current = this.root;

        //tranverse untill no node in right
        while (current.right) {
            current = current.right;
        }
        console.log(current.value)
        return current.value;
    }


    //find
    contains(value) {
        let current = this.root;

        while (current) {
            if (value === current.value) {
                return true
            }

            if (value < current.value) {
                current = current.left
            }
            else if (value > current.value) {
                current = current.right;
            }
        }

        return false;
    }


    //depth first search - branch by branch
    //dfs
    //left,root,right
    dfsInorder() {
        let result = [];

        const traverse = node => {
            //if left node exists traverse left
            if (node.left) {
                traverse(node.left)
            }
            // push root node 
            result.push(node.value);

            //if right node exists traverse right
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);

        console.log(result);
        return result;
    }

    //root,left,root
    dfsPreorder() {
        let result = [];

        const traverse = node => {
            // push root node 
            result.push(node.value);

            //if left node exists traverse left
            if (node.left) {
                traverse(node.left)
            }

            //if right node exists traverse right
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return result;
    }

    //left,right,root
    dfspostorder() {
        let result = [];

        const traverse = node => {
            //if left node exists traverse left
            if (node.left) {
                traverse(node.left)
            }

            //if right node exists traverse right
            if (node.right) {
                traverse(node.right);
            }

            // push root node 
            result.push(node.value);

        }
        traverse(this.root);

        return result;
    }

    //breadth first search - level by level
    //BFS more space complexity depends on tree (more branches)
    //DFS more space complexity depends on tree (deep long one sided tree)
    bfs() {
        let result=[];
        let queue=[];

        queue.push(this.root);

        while(queue.length){
            let current = queue.shift();

            result.push(current.value);

            if(current.left){
                queue.push(current.left)
            }
            else if(current.right){
                queue.push(current.right)
            }
        }
        console.log(result)
        return result;
    }
}

const bst = new BST(30);


bst.insert(2);
bst.insert(12);
bst.insert(22);
bst.insert(32);
bst.insert(5);
bst.insert(11);
bst.insert(43);

// bst.min();
// bst.max();
// bst.dfsInorder();
// bst.dfsPreorder();
// bst.dfspostorder();


bst.bfs();


//time complexity //space complexity
//O(logn)         // O(n)
