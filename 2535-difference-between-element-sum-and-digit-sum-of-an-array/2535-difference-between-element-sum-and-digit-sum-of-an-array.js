/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0
    let digitString = ''
    let digitSum = 0
    
    for(i=0 ; i<nums.length ; i++) {
        elementSum = elementSum + nums[i]
        digitString = digitString + nums[i]
    }
    console.log(digitString)
    for(i=0; i<digitString.length; i++) {
        digitSum = digitSum + parseInt(digitString[i])
    }
    
    return(elementSum - digitSum)
   
};