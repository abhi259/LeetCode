/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const finalArray = []
    for(let i = 0 ; i<nums.length ; i++) {
        finalArray.push(nums[nums[i]])
    }
    return finalArray
};