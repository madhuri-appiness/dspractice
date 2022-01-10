function hashFunction(key, size) {
    let total = 0;
    let prime = 3;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        value = key[i].charCodeAt(0) - 96;
        total += (total * prime + value) % size;
    }
    return total;
}

class HashTable{
    constructor(){
        this.table = new Array(53);
    }

    set(key,value){
        let index = this.hashFunction(key,this.table.length);
        if(!this.table[index]){
            this.table[index] = [];
        }
        this.table[index].push([key,value]);
    }

    get(key){
        let index = this.hashFunction(key,this.table.length);
        if(this.table[index]){
           for(let i=0; i < this.table[index].length; i++){
               if(this.table[index][i][0] === key){
                   return this.table[index][i][1]
               }
           }
        }
        return undefined
    }

    values(){
        let valueArr =[];
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                for(let j=0; j < this.table[i].length; j++){
                    if(!valueArr.includes(this.table[i][j][1])){
                        valueArr.push(this.table[i][j][1])
                    }
                }

            }
        }
        return valueArr;
    }
}