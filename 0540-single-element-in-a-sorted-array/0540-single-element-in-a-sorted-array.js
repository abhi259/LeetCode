/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    let singleNumber  
    for(let i=0; i<nums.length; i++ ) {
       
      
        if(nums[i] === nums[i+1]) continue 

        if(nums[i] === nums[i-1]) continue 

        singleNumber = nums[i]

        console.log(nums[i])
       
        
    }
    return singleNumber
};