/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let i = 0
    let j = height.length

    let area = 0

    while( i < j )  {
        let tempHeight = 0
        let tempArea = 0

        if(height[i] < height[j]) {
            tempHeight = height[i]
            tempArea = tempHeight * (j-i)
            i++
        } else {
            tempHeight = height[j]
            tempArea = tempHeight * (j-i)
            j--
        }
        
    

        if (area < tempArea ) {
            area = tempArea
            console.log(area)
        }
    }

    return area

};