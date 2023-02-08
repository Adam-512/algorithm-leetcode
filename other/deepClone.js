function deepClone(obj,mp = new WeekMap()){
    if(obj == null) return obj;
    if(obj instanceof Date) return new Date(obj)
    if(obj instanceof RegExp) return new RegExp(obj)
    //补充Map和Set的情况
    if(typeof obj !="object") return obj
    if(mp.get(obj)) return mp.get(obj)
    let cloneObj = Object.create({})
    mp.set(obj,cloneObj)
    for(let k in obj){
        if(obj.hasOwnProperty(k)){
            cloneObj[k] = deepClone(obj[key],mp)
        }
    }
    return cloneObj
}   