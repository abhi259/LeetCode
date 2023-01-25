/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {

    let length = indices.length
    let str = new Array(length)
    console.log(str)

    for (let i = 0 ; i<s.length ; i++) {
        str[indices[i]] = s[i]
    }
    return (str.join(""))
    

};