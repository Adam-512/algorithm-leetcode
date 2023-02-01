/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let left = 0;
    let need = {}
    let w = {}
    let valid = 0
    let len = Infinity
    let start = 0
    for (let str of t) {
        //注意： 赋值时和自增位置，前置++返回自增后的值
        need[str] = need[str] ? ++need[str] : 1;
    }
    //    console.log(need)
    for (let r = 0; r < s.length; r++) {
        let str = s[r]
        if (need[str]) {
            w[str] = w[str] ? ++w[str] : 1;
            if (w[str] == need[str]) {
                valid++
            }
            // console.log(w,need,valid)
        }

        while (valid == Object.keys(need).length) {
            //    console.log(s.slice(left, r))
            if (r - left < len) {
                start = left
                len = r - left;
            }

            let str = s[left]
            left++;
            if (need[str]) {
                if (need[str] == w[str]) {
                    valid--
                }
                w[str]--
            }
        }
    }
    return len < Infinity ? s.slice(start, start + len + 1) : ""
};