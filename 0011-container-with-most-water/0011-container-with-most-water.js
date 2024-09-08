/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let lp = 0
    let rp = height.length - 1
    let area = 0

    while(lp < rp){
        
        const tempArea = Math.min(height[lp], height[rp] ) * (rp-lp)

        area = Math.max(area, tempArea);

        console.log(area)

        if( height[lp] < height[rp] ) {
            lp++
        } else if ( height[lp] > height[rp] ) {
            rp--
        } else {
            lp++
            rp--
        }

    }
    return area 
};