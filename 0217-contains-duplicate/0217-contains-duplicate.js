/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numsSet = new Set(nums)
    
    console.log(numsSet)
    console.log(numsSet.size)


    if(numsSet.size === nums.length) {
        return false
    } else {
        return true
    }





};