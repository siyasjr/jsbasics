const promise1 = new Promise((resolve, reject) =>{
    //resolve(["js","java"]);
    reject('API fetch failed!')

})

const promise2 = new Promise((resolve, reject) =>{
    //resolve(["react","angular"]);
    reject('API fetch failed!')
})


Promise.any([promise1,promise2])
.then((res) => {console.log(JSON.stringify(res));})
.catch((err) => {console.log(err);})
