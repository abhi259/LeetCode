/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let finalArray = []
    for(let i=0; i<nums.length ; i++){
        if(i === 0) {
            finalArray.push(nums[i])
        }
        else {
            finalArray.push(finalArray[i-1] + nums[i])
        }
        
    }return(finalArray)
    
};