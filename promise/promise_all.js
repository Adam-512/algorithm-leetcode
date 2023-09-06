/**
 * 所有promise都成功，按顺序返回结果
 * @param {Promise[]} task - description
 * @return {Promise<any>} description
 */
const all = async function (task) {
    return new Promise((resolve, reject) => {
        let result = [];
        let count = 0;
        for (let i = 0; i < task.length; i++) {
            let p = task[i];
            if (p instanceof Promise) {
                p.then(res => {
                    result[i] = res;
                    count++;
                    if (count == task.length - 1) {
                        resolve(result);
                    }
                }).catch(reject);
            }
            else {
                result[i] = p;
                if (count == task.length - 1) {
                    resolve(result);
                }
            }
        }
    });
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
    race([p1,p2,p3]).then(r=>console.log(`race: ${r}`))
    Promise.race([p1,p2,p3]).then(r=>console.log(`promise: ${r}`))
}

