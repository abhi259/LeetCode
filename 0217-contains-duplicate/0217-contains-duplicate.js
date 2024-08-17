/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

const tempSet = new Set()

for( let i=0; i<nums.length ; i++ ) {
    if(tempSet.has(nums[i])) {
        return true
    } else {
        tempSet.add(nums[i])
    }
}

return false;
    
};