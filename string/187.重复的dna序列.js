/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    //分子10长度,重复出现为一个valid
    let left = 0; right = 0;

    let wHash = 0
    let nums = {}
    let i = -1
    for (let str of 'ACGT') {
        nums[str] = ++i
    }
    let hashSet = new Set()
    let resSet = new Set()
    while (right < s.length) {
        let str = s[right];
        right++;

        //添加低位数字
        wHash = 4 * wHash + nums[str]

        while (right - left == 10) {
            if (hashSet.has(wHash)) {
                resSet.add(s.slice(left, right))
            }
            else {
                hashSet.add(wHash)
            }
            let d = s[left]
            left++

            //删除高位数字
            wHash = wHash - nums[d] * Math.pow(4, 9)
        }

    }
    return [...resSet]
};