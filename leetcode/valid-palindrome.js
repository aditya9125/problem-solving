function refineString(s){

    s= s.toLowerCase();
    s= s.replace(/[^a-zA-Z0-9]/g,"");
    return s;
}

var isPalindrome = function(s) {

    s= refineString(s);
    //console.log(refinedString);
    let flag=true, n=s.length;

    for(let i=0;i<n/2;i++){
        flag = flag && (s[i]===s[n-i-1]);
    }

    return flag;
};

console.log(isPalindrome("1"));