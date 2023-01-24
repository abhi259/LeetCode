/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const finalArray = []
    const max = Math.max.apply(null,candies)
    
    for(let i=0 ; i<candies.length ; i++) {
        if (candies[i] + extraCandies >= max){
            finalArray.push(true)
        } else {
            finalArray.push(false)
        }
    }
    console.log(finalArray)
    return(finalArray)
    

};