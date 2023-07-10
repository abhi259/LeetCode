/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {


let string1 = a

    let output = 1
    
        while(string1.length < b.length) {
            output++
            string1 = string1 + a
        } 

        if(string1.includes(b)) {  
            return output
        }

       string1 = string1 + a
        output++

        if(string1.includes(b)) {
            return output 
        } else {
            return -1
        }

};





