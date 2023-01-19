/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let hWealth = 0
    for (let i=0 ; i<accounts.length ; i++) {
        let total = accounts[i].reduce((a,b) => a+b)
        if(total > hWealth) {
            hWealth = total
        }
    }
    return (hWealth)
    
};