function hashFunction(key, size) {
    let hash = 3;
    for (let i = 0; i < key.length; i++) {
        hash = hash * key.charCodeAt(i) % size;
    }
    return hash;
}

class HashTable {
    constructor() {
        this.table = new Array(3);
        this.numItem = 0;
    }

    increaseSize() {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(function(item) {
            if (item) {
                item.forEach(function([key, value]) {
                    const indx = hashFunction(key, newTable.length);
                    if (newTable[indx]) {
                        newTable[indx].push([key, value])
                    }
                    else {
                        newTable[indx] = [[key, value]];
                    }
                })
            }
        })
        this.table = newTable;
    }
    setItem(key, value) {
        this.numItem++;
        const loadFactor = this.numItem / this.table.length;
        if (loadFactor > .8) {
            console.log('resize happening')
            this.increaseSize();
        }
        const indx = hashFunction(key, this.table.length);
        if (this.table[indx]) {
            this.table[indx].push([key, value])
        }
        else {
            this.table[indx] = [[key, value]];
        }
    }
    getItem(key) {
        const indx = hashFunction(key, this.table.length);
        if (!this.table[indx]) {
            return null;
        }
        return this.table[indx].find(x => x[0] == key)[1];
    }
}

const mytable = new HashTable();

mytable.setItem('firstName', 'mad');
mytable.setItem('lastName', 'patil');
mytable.setItem('age', '27');
mytable.setItem('dob', '01/06/94');
mytable.setItem('dohhdsb', '01/jbs06/94');
mytable.setItem('gdbh', '01/jbs06/94');

console.log(mytable.getItem('firstName'));
console.log(mytable)
console.log(mytable.getItem('age'))
console.log(mytable.getItem('lastName'))
console.log(mytable.getItem('dob'))

//O(n)
