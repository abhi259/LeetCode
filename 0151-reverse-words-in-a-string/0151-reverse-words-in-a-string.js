/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let orgString = s
    let cleanString = (orgString.replace( /  +/g, ' ' ))
    let arrayString = cleanString.split(" ")
    let arrayLength = arrayString.length

    let finalString = ""

    for (i=0 ; i<arrayLength ; i++) {
        finalString = finalString + arrayString[(arrayLength-1) - i] + " "
    }
    console.log(finalString)
    return(finalString.trim())
};