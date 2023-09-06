/**
 * description 返回最快resolve的结果
 * @param {Promise[]} task - description
 * @return {Promise<any>} description
 */
const race = (task) => {
    return new Promise((resolve, reject) => {
        for(let p of task){
            p.then(resolve).catch(reject);
        }
    });
}

async function test() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'one');
    });

    const p2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'two');
    });
    race([p1,p2]).then((r)=>{
        console.log("race:"+r)
    })
    Promise.race([p1,p2]).then((r)=>{
        console.log("promise:"+r)
    })
}