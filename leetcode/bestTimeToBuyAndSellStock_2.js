//O(n) solution

var getMaxArray= function(input){
    var maxArr = new Array(input.length)
    maxArr[input.length-1]=input[input.length-1];

    for(var i=input.length-2;i>=0;i--){
        if(input[i]>maxArr[i+1]){
            maxArr[i]=input[i];
        }else{
            maxArr[i]=maxArr[i+1];
        }
    }

    return maxArr;
}

var getMaxProfit= function(input, maxArr){
    
    var maxProfit=0;
    for(var i=0;i<input.length;i++){
        if((maxArr[i]-input[i])>maxProfit){
            maxProfit= maxArr[i]-input[i];
        }
    }
    return maxProfit;
}

var input=[7,1,5,3,6,4];

var maxArr= getMaxArray(input);
var profit= getMaxProfit(input, maxArr);

console.log("Result is: ",profit);


