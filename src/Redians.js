/**
 * radians and degrees to change COMMON class
 * base class for other childer 
 * author: xyh
 * Date: 2018/8/30 19:06
 * 
 */

/**
 * 
 * @see RediasBase
 * @param {Number} redias 
 * @param {Number} degress
 * @function getDeg => 
 * @function getRedias =>  
 * @return {*}
 */

class RediasBase {
    constructor (deg = 1, redias = 1) {
        this.deg = deg;
        this.redias = redias;
    }

    getRedias () {
        if (this.deg = 1) {
            return Math.PI / 180;    
        } 

        return this.deg * Math.PI / 180;
    }

    getDeg () {
        if (this.redias = 1) {
            return 180 / Math.PI;
        }

        return this.redias * 180 / Math.PI;
    }
}

export default RediasBase;

