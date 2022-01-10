class MaxBinaryHeap{
    constructor(){
        this.values =[];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    // inserting element in tree
    bubbleUp(){
       let index= this.values.length - 1;
       const ele = this.values[index];

       while(index > 0){
           let parentIndex = Math.floor((index-1)/2);
           let parent = this.values[parentIndex];
           if(ele <= parent) break;
               this.values[parentIndex] = ele;
               this.values[index] = parent;
               index = parentIndex;
       }
    }

    //removing max element in MaxHeapTree
    extractMax(){
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;  
            this.bubbleDown();
        }
        return max;
    }

     //sink down or bubble down
     bubbleDown(){
        let index =0;
        let length = this.values.length;
        let ele = this.values[0];
        while(true){
            let leftIndx = 2*index +1;
            let rightIndx = 2*index +2;
           let leftChild, rightChild;
           let swap = null;
            if(leftIndx < length){
                leftChild = this.values[leftIndx];
                if(leftChild > ele){
                    swap = leftIndx;
                }
            }
            if(rightIndx < length){
                rightChild = this.values[rightIndx];
                if((swap == null && rightChild > ele) || (!swap && rightChild > leftChild)){
                    swap = rightIndx
                }
            }


           if(swap === null) break;
           this.values[index] = this.values[swap];
           this.values[swap] = ele;
           index = swap;
        }
    }
}