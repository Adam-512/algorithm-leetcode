/**
 * description
 * @param {Promise[]} task - description
 */
const any = (task) => {
    return new Promise((resolve, reject) => {
        let count = 0;
        let errs = [];
        for (p of task) {
            p.then(resolve);
            p.catch(e => {
                count++;
                errs.push(e);
                if (count == task.length) {
                    reject(errs);
                }
            });
        }
    })
}

async function test() {
    var p1 = Promise.reject(1);
    var p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(3)
        }, 1000);
    })
    var p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(2)
        }, 500);
    })
    any([p1, p2, p3]).then(r => console.log(`any: ${r}`)).catch(e => console.log(`error.any: ${e}`))
    Promise.any([p1, p2, p3]).then(r => console.log(`promise: ${r}`)).catch(e => console.log(`promise error.any: ${e}`))
}