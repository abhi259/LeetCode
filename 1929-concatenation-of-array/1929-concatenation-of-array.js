/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let finalArray=[...nums, ...nums]
    // for(let i=0;i<nums.length; i++) {
    //      finalArray.push(nums[i])
    // }
    // console.log(finalArray)
    
    return finalArray
};