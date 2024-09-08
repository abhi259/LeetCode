/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    lp = 0
    rp = numbers.length - 1

    while (lp < rp ) {

         console.log(numbers[lp] + numbers[rp])
         sum = numbers[lp] + numbers[rp]

        if(sum == target ) {
            return [lp+1, rp+1]
        }
        else if ( sum > target ) {
            rp = rp - 1 
        } else if ( sum < target ) {
            lp = lp + 1 
        }  
    } 
    
};

// var twoSum = function(numbers, target) {
//     let lp = 0;
//     let rp = numbers.length - 1;

//     while (lp < rp) {
//         let sum = numbers[lp] + numbers[rp];
//         if (sum === target) {
//             return [lp + 1, rp + 1]; // Return indices in 1-based format
//         } else if (sum > target) {
//             rp--; // Decrement right pointer
//         } else {
//             lp++; // Increment left pointer
//         }
//     }
    
//     return []; // Return an empty array if no solution is found
// };