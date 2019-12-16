var p = new Promise(function (resolve, reject) {

    //do some thing
    setTimeout(function () {
        console.log('done');
        resolve('hello')
        //reject('hungry')

    }, 2000)
});
p.then(function (result) {
    console.log(result);
    //resolve('hello2')
    return 0x12;
}, function (reason) {
    console.log(reason)
}).then(function (result) {
    console.log(result)
    console.log(someval)
}).catch(function (error) {
    const t = typeof error
    console.log(error)
    console.dir(t)
})

