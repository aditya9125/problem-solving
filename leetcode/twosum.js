"use strict";
function twoSum(nums, target) {
    var ans = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] == (target - nums[i])) {
                ans.push(i);
                ans.push(j);
                break;
            }
        }
    }
    return ans;
}
;
console.log("The ans is", twoSum([3, 2, 1], 4));
//# sourceMappingURL=twosum.js.map