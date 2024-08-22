/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    

    let noSpaces = s.split(' ').join('').toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    console.log(noSpaces)

    let reverseString =''

    for(let i=0; i<noSpaces.length; i++) {
        reverseString =  noSpaces[i]  + reverseString 
    }

   if(reverseString === noSpaces ) {
    return true 
   } else {
    return false 
   }
    
};