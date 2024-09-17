/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxProfit = 0

    lp = 0
    rp = 1

    let length = prices.length

    while(rp < length) {
        let currentMax = 0
        if(prices[lp] < prices[rp] ) {
            currentMax = prices[rp] - prices[lp]
            rp ++
        } else {
            lp = rp
            rp ++
        }

        if (currentMax > maxProfit) maxProfit = currentMax
    }
    return maxProfit
};