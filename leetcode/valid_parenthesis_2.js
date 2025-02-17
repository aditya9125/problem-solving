/* 
Problem Details
___________________________
Name   : Valid Parenthesis
Source : LEETCODE
Problem Link : https://leetcode.com/problems/valid-parentheses/description/
Solution ID : 
Solution Link : https://leetcode.com/problems/valid-parentheses/submissions/1545470529
Solution Description : Brute force, without using stack, just keep removing the pairs
Comments : NA
Revision Recommended : No 
Difficulty : Easy
___________________________
*/
var isValid = function(s) {

    while(s.length>=2){

        let p1 = s.indexOf("()");
        let p2 = s.indexOf("{}");
        let p3 = s.indexOf("[]");

        let minIndex = p1 !== -1 ? p1 : p2 !== -1 ? p2 : p3;

        if (minIndex === -1) break;

        s = s.slice(0, minIndex) + s.slice(minIndex + 2);
        
    }
    return (!s.length);
};

console.log(isValid('({[]{}}'));