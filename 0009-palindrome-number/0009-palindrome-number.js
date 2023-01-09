/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   
     let num = x 
     let reversedString = ""
    if (!( x >= 0 )) {
        return( false )
    } else {
     num = num.toString()
        for (let i = 0; i< num.length; i++) {
            reversedString = num[i] + reversedString
        }
        if (reversedString === num) {
            return true
        } else {
            return false
        }
    }
    
    
    

};