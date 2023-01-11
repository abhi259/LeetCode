/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0
    let lastVal = 0
    for (i=0; i < s.length ; i++) {
        if (s[i] === " ") {
            length = 0
        } else {
            length = length + 1
            lastVal = length
        }
    } 
    return(lastVal)
};