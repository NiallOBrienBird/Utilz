export function bipolarPow(to_scale, index) {
    // Check appropriate parameter types 
    if(typeof to_scale !== 'number') console.error("bipolarPow(): to_scale must be type number")
    if(typeof index !== 'number') console.error("bipolarPow(): index must be type number")

    // Prevent div by 0 err
    if( to_scale === 0 ) return 0;

    // Std pow if value is positive
    if( to_scale > 0)  return Math.pow(to_scale, index)
    
    // if value is negative, take the power of the abs value, make negitive 
    return -1 * Math.pow(Math.abs(to_scale), index)
}

export default bipolarPow