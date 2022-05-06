const promise = new Promise((resolve, reject) => {
    resolve("222")
})
promise.then(res => {
    console.log(res);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("finally called");
})