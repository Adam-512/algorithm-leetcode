/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let res = false;
    let left = 0;
    function fn(s, t) {
        if(s.length !== t.length){
            return false;
        }
        let ret = new Array(26).fill(0);
        let base = 'a'.charCodeAt();
        for(let val of s){
            ret[val.charCodeAt() - base] ++
        }
        for(let val of t){
            if(!ret[val.charCodeAt() - base]){
                return false;
            }
            ret[val.charCodeAt() - base] --
        }
        return true;
    }
    for(let right=0;right<s2.length;right++){
        if(right - left == s1.length - 1 ){
            res = fn(s1,s2.substring(left,right+1))
            left++;
            if(res)
                break;
        }

    }
    return res;
};