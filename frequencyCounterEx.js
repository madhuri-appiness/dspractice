function sameSqure(arr1,arr2){
    let freqCounter1={};
    let freqCounter2={};

    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for(let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            return false;
        }

        if(freqCounter2[key ** 2] !== freqCounter1[key]){
            return false;
        }
    }
    return true;

}


sameSqure([1,1,2,4],[4,1,16,1]) // true
sameSqure([1,1,2,4],[4,1,11,1]) // false



function ValidAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    let obj={};
    for(let i=0; i< str1.length; i++){
        let letter = str1[i];
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
    }

    for(let i=0; i < str2.length; i++){
        let letter = str2[i];

        if(!obj[letter]){
            return false;
        }else{
            obj[letter] -= 1;
        }
    }
    return true;
}

ValidAnagram('cinema','macine')
