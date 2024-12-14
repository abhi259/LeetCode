/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let hashMap = {}

    for(let i=0 ; i<nums.length; i++) {

        const requiredNumber = target - nums[i] 

        if(hashMap.hasOwnProperty(requiredNumber)) {
            return [i,hashMap[requiredNumber]]
        } else {
            hashMap[nums[i]] = i
        }
    }
};