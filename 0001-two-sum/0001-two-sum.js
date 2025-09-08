/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let hashMap = {}

    for(let i=0 ; i<nums.length ; i++) {

        let reqNum = target - nums[i] 

        if(hashMap.hasOwnProperty(reqNum)) {
            return [i,hashMap[reqNum]]
        } else {
            hashMap[nums[i]] = i
        }
    }

};