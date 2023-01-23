/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    // let firstBi = trust[0][1]
    // for( let i = 0 ; i < trust.length ; i++){
    //     if(trust[i][0] === trust[i][1]) {
    //         console.log(1)
    //         return -1
    //     }else if (trust[i][1] != firstBi) {  
    //         console.log(2)
    //         return -1
    //     }
    // }
    // console.log(3)
    // return(firstBi)

    let arrayBi = []
    if (n===1) return 1
    for(let i = 0 ; i < trust.length ; i++) {
        if(!arrayBi.includes(trust[i][1])){
        arrayBi.push(trust[i][1])
        }
    }
    console.log(arrayBi)
    for(let i = 0 ; i < trust.length ; i++) {
        if(arrayBi.includes(trust[i][0])){
        let index = arrayBi.indexOf(trust[i][0])
        arrayBi.splice(index,1)
        }
    }
    console.log(arrayBi)
    if (arrayBi.length > 1) {
        return -1
    } else if (arrayBi.length === 0) {
        return -1
    } 
    // else return arrayBi[0]
    let count = 0
    for(let i = 0 ; i < trust.length ; i++) {
        if (trust[i][1] === arrayBi[0]){

            count++
        }
    }
    console.log(count)
    if(count === n-1) {
        return arrayBi
    } else return -1
    console.log(arrayBi)

};