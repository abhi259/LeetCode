/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if(nums == null || nums.length === 0) return 0

    const numsSet = new Set(nums)

    let max = 0

    for (let num of numsSet) {
       
        if(numsSet.has(num-1)) continue

        let tempMax = 1
        let tempNum = num

        while(numsSet.has(tempNum+1)) {
            tempMax = tempMax + 1
            tempNum = tempNum + 1 
        }

        if(tempMax > max) {
            max = tempMax
        }
    }
    return max
};











