/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //不重复字串，最大窗口
    let left = 0;
    // let r = 0
    let w = {}
    let len = 0
    for(let r=0;r<s.length;r++){
        let str = s[r]
        w[str] = w[str] ? ++w[str] : 1;
        // console.log(w)
        while(w[str] > 1){
            let d = s[left]
            left++
            //
            w[d]--
        }
        // console.log(s.slice(left,r))
        //
        len = Math.max(len,r - left + 1)
    }
    return len;
};