var rotate = function(nums, k) {
     
    var n= nums.length;
    var tmp= new Array(n).fill(0);

    for(var i=0;i<nums.length;i++){
       tmp[(i+k)%n]=nums[i];       
    }
    nums= tmp; 
    
    return nums;
    
};

var nums=[1,2,3,4,5,6,7];
var k=3;

var nums= rotate(nums,k);

console.log("Answer is", nums);