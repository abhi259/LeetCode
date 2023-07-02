/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

 let newMatrix = []

 for(let i = 0; i <matrix.length; i++ ) {

  let tempArray = []
  for(let j = matrix[i].length -1; j>= 0; j-- ) {
    tempArray.push(matrix[j][i])
  }
  newMatrix.push(tempArray)

 }

 for(let k =0 ; k<matrix.length ; k++) {
   matrix[k] = newMatrix[k]
 }

console.log("matrix",matrix)

    
};