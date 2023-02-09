/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// 比较两个数组大小的情况
// 核心妙点：哪个数组长度更长，用哪个进行 while 遍历
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.')
    let v2 = version2.split('.')
    let l=0;
    let lenV = v1.length > v2.length ? v1 : v2
    while(l < lenV.length){
        let n1 = Number.parseInt(v1[l]) || 0
        let n2 = Number.parseInt(v2[l]) || 0
        if(n1 == n2){
            l++
        }else{
            return n1 > n2 ? 1 : -1
        }
    }
    return 0
};