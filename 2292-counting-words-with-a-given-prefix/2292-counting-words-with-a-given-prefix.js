/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {

    let perfLength = pref.length

    let count = 0

    for (let i =0 ; i< words.length ; i++ ) {
        if(words[i].substr(0,perfLength) == pref ) {      
            count++ 
        }
    }

    return count

};