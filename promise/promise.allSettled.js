/**
 * description 全部promise执行完毕，不管是resolve还是reject
 * @param {Promise[]} task - description
 */
const allSettled = (task) => {
    return new Promise(resolve => {
        let count = 0;
        let result = [];
        const handle = (v, i) => {
            count++;
            result[i] = v;
            if (count == task.length) {
                resolve(result);
            }
        }
        for (let i = 0; i < task.length - 1; i++) {
            let p = task[i];
            p.then((r)=>handle(r,i)).catch((e)=>handle(e,i));
        }
    })
}

async function test() {
    var p1 = Promise.resolve(1);
    var p2 = new Promise(resolve => {
        setTimeout(() => {
            resolve(3)
        }, 1000);
    })
    var p3 = new Promise(resolve => {
        setTimeout(() => {
            resolve(2)
        }, 500);
    })
    allSettled([p1, p2, p3]).then(r => console.log(`allSettled: ${r}`))
    Promise.allSettled([p1, p2, p3]).then(r => console.log(`promise: ${r}`))
}