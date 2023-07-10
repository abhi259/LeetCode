/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    

let hashMap = {}
let sortedArray = []
let output = []


for (let i=0; i<nums.length; i++) {
    if(hashMap[nums[i]]) {
        hashMap[nums[i]]++
    } else {
        hashMap[nums[i]] = 1
    }

}

for (let key in hashMap ) {
   sortedArray.push([key,hashMap[key]])
}

sortedArray.sort( (a,b) => {
return b[1] - a[1]
})

for( let i=0; i<k; i++) {
    output.push(sortedArray[i][0])
}

return output

};