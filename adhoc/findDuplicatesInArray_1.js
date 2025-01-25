//Time Complexity: O(nlog(n))

const arr=[5,2,6,4,5,3,2,9];

var mp= new Map();

arr.forEach((item)=>{

    if(mp.has(item)){
        mp.set(item, mp.get(item)+1);
    }else{
        mp.set(item,1);
    }
})

console.log(mp);
