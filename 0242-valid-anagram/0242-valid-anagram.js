/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // if (s.length !== t.length ) {
    //     return false
    // } else {
    //     let hashMapS = {}
    //     let hashMapT = {}
    //     let length = s.length
    //     for (let i=0 ; i<length ; i++) {
    //         if (!(s[i] in hashMapS)) {
    //             hashMapS[s[i]] = 1
    //         } else {
    //             hashMapS[s[i]]++
    //         }
    //         if (!(t[i] in hashMapT)) {
    //             hashMapT[t[i]] = 1
    //         }  else {
    //             hashMapT[t[i]]++
    //         }
    //     }
    //     console.log(hashMapS)
    //     console.log(hashMapT)

    //     for (let ch in hashMapS){
    //         if (hashMapS[ch] !== hashMapT[ch]) {
    //             return false
    //         } 
    //     }
    //     return true
    // }


    if(s.length !== t.length ) {
        return false
    } else {

        let hashMapS = {}
        let hashMapT = {}

        for(let i=0; i<s.length; i++) {
            if(! (s[i] in hashMapS)) {
               
                hashMapS[s[i]] = 1
            } else {
                hashMapS[s[i]]++
            }
             if(! (t[i] in hashMapT)) {
               
                hashMapT[t[i]] = 1
            } else {
                hashMapT[t[i]]++
            }
        }

        console.log(hashMapS)
        console.log(hashMapT)

        for ( let cha in hashMapS) {
            if(hashMapS[cha] !== hashMapT[cha]) {
                return false
             }
        }
             return true
       
    } 
}





