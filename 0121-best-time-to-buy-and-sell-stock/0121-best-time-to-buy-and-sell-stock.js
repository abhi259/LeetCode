/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let leftPointer = 0
    let rightPointer = 1
    let maxProfit = 0

    while (  rightPointer< prices.length ) {
        let currentMax = 0
        if(prices[leftPointer] < prices[rightPointer] ) {
            currentMax = prices[rightPointer] - prices[leftPointer]
            rightPointer++
        } else {
            leftPointer = rightPointer
            rightPointer++
        }
        
        if(currentMax > maxProfit) {
            maxProfit = currentMax
        }
    }

    return maxProfit 

};