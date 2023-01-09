/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let array = strs
    let arrayLength = array.length
    var prefix = ''
    let smallestStringLength = strs[0].length
    
    for (let i of array) {
        if (i.length < smallestStringLength) {
            smallestStringLength = i.length
        }
    }
    
    
    for (i=0; i < smallestStringLength ; i++) {

        for (j=0 ; j < arrayLength; j++ ) {
            
            let firstLetter = array[0][i]
            if(array[j][i] !== firstLetter) {
                console.log( "break :",array[j][i])
                return prefix
            }
            if (j === (arrayLength - 1) ) {
                prefix = prefix + array[j][i]
                
            }
        }
      
    }return prefix
}