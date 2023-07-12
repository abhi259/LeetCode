/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let lp = 0
    let rp = 1
    let max = 0
    let stringSet = new Set(s[lp])

    while(rp <= s.length) {
        let currentMax = 0
        let currentString = s.slice(lp,rp)
        // console.log(currentString)
        // console.log('lp :',lp, 'rp :', rp)

        if(stringSet.has(s[rp]) ) {
           
            lp++
            rp  = lp + 1
            stringSet = new Set(s[lp])
        } else {
            stringSet.add(s[rp])
            rp++
        }

        currentMax = currentString.length

        if(currentMax > max ) {
            max = currentMax
        }
    }

    return max
};