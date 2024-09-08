/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    // let lp = 0
    // let rp = height.length - 1
    // let area = 0

    // while(lp < rp){
        
    //     const tempArea = Math.min(height[lp], height[rp] ) * (rp-lp)

    //     area = Math.max(area, tempArea);

    //     console.log(area)

    //     if( height[lp] < height[rp] ) {
    //         lp++
    //     } else if ( height[lp] > height[rp] ) {
    //         rp--
    //     } else {
    //         lp++
    //         rp--
    //     }

    // }
    // return area 

       let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const water = Math.min(height[left], height[right]) * (right - left);

        if (water > maxWater) {
            maxWater = water;
        }

        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }

    return maxWater;
};