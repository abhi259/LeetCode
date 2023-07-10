/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {

    const hashMapA = {}
    const hashMapB = {}

//     for (let i = 0; i<a.length; i++ ) {
//         if(a[i] in hashMapA )  {
//             hashMapA[a[i]]++
//         } else {
//             hashMapA[a[i]] = 1
//         }
//     }

//     for (let i = 0; i<b.length; i++ ) {
//         if(b[i] in hashMapB )  {
//             hashMapB[b[i]]++
//         } else {
//             hashMapB[b[i]] = 1
//         }
//     }

//     console.log(hashMapA)
//     console.log(hashMapB)

//     let difference =  hashMapB[b[0]] - hashMapA[a[0]] 

//     let output = 0
 

//     for (key in hashMapA) {
//         output = output + (hashMapB[key] - hashMapA[key] )
    
//     }

//    console.log(output - 1)


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





