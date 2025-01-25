//Time Complexity: O(Max(n, m)) where n: number of elements in the array and m: maximum element in the array
//Tags: Adobe

const arr=[5,2,6,4,5,3,2,9];

const sz= Math.max(...arr);

const freq = new Array(sz+1).fill(0);

arr.forEach((value)=>{
    freq[value]++;
})

freq.forEach((value, index)=>{
    if(value>0){
        console.log(`${index} : ${value}`);
    }
})
