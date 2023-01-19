/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const finalArray = []
    for(let i=0 ; i<n ; i++) {
        finalArray.push(nums[i])
        finalArray.push(nums[i+n])
    }
    console.log(finalArray)
    return(finalArray)
};