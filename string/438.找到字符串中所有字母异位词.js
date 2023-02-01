/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left = 0,right = 0;
    let need = {}, w = {};
    let valid = 0
    let res = []
    for(let str of p){
        need[str] = need[str] ? ++need[str] : 1
    }
    while(right < s.length){
        let str = s[right]
        right++;
        if(need[str]){
            w[str] = w[str] ? ++w[str] : 1;
            if(need[str] == w[str]){
                valid++
            }
        }
        // console.log(w,valid)
        //限制窗口大小
        while(right - left >= p.length){
            //
            if(valid == Object.keys(need).length){
                // console.log(s.slice(left,right))
                res.push(left)
            }
            let d = s[left]
            left++
            if(need[d]){
                //
                if(w[d] == need[d]){
                    valid--
                }
                w[d]--
            }
        }
    }
    return res
};