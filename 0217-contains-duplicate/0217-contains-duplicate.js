/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {


// const hashMap = {}

// for(let i = 0; i<nums.length; i++ ) {

//     if(hashMap[nums[i]]) {
//         return true;
//     } else {
//         hashMap[nums[i]] = 1 
//     }
// }
// console.log(hashMap)
// return false 
// }

const map = {}

for(let i = 0 ; i< nums.length; i++) {
    if(map.hasOwnProperty(nums[i])) {
        return true
    } else {
        map[nums[i]] = 1
    }
}

return false 
}