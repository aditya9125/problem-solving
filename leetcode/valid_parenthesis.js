/* 
Problem Details
___________________________
Name   : 
Source : 
Problem Link   :
Solution ID : 
Solution Link : 
Solution Description : 
Comments : 
___________________________
*/
var isValid = function(s) {
    const stack = [];
    //console.log(stack);
    
    for(let i=0;i<s.length;i++){
        
        let n= stack.length;
        let item=s[i];
        if(n==0){
                stack.push(item);
                continue;
        }
        
        switch(item){
            
            case ')':
                if(stack.at(n-1)=='('){
                    stack.pop();
                }else{
                    stack.push(')');
                }
                break;
            case '}':
                if(stack.at(n-1)=='{'){
                    stack.pop();
                }else{
                    stack.push('}');
                }
                break;
            case ']':
                if(stack.at(n-1)=='['){
                    stack.pop();
                }else{
                    stack.push(']');
                }
                break;
            default:
                stack.push(s[i]);
                break;
        }
    }
    
    if(stack.length>0){
        return false;
    }else{
        return true;
    }
    
    
};