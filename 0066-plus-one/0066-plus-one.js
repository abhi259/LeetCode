/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    console.log(digits)
    let number = ""
    for (let i = 0 ; i < digits.length ; i++ ) {
        number = number + digits[i]
    }
    console.log(number)
    number = BigInt(number) + BigInt(1)
    number = number.toString() 

    //  console.log(parseInt(number))
    // number = number.toString()
    let finalArray = []
    for (let i = 0 ; i < number.length; i++) {
        finalArray.push(parseInt(number[i]))
    }

   console.log(finalArray)
    return(finalArray)

};