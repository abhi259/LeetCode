/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const finalOutput = []
    for( let i=0 ; i<nums.length ; i++) {
        let count = 0
        for (j=0 ; j<nums.length ; j++) {
            if ((nums[i] != nums[j]) && nums[j] < nums[i]) {
                count++
            }
            
        }
        finalOutput.push(count)
    }
    console.log(finalOutput)
    return finalOutput
};