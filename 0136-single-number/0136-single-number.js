/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
let uniqueNums = new Set()

for(let i=0; i<nums.length; i++) {
    if(uniqueNums.has(nums[i]) ) {
        uniqueNums.delete(nums[i])
    } else {
        uniqueNums.add(nums[i])
    }
   
}



return Array.from(uniqueNums)[0]
};