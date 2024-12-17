//O(n^2) solution

var setDiff = function (prices){

    var diff= new Array(prices.length).fill(0);
    diff[prices.length-1]=0;
    for(var i=0;i<prices.length; i++){
        var p=0;
        for(var j=i+1;j<prices.length; j++){
            if((prices[j]-prices[i])>p){
                p= prices[j]-prices[i];
            }
        }
        diff[i]= p;
    }

    console.log("[LOG] difference array is: ",diff);
    return diff;
}

var getMaxProfit= function(arr){
    return Math.max(...arr);
}

var input=[7,6,4,3,1];

var diff= setDiff(input);
var profit= getMaxProfit(diff);

console.log("Result is: ",profit);


