let myPromise = new Promise(function(resolve, reject){
    const a=4
    const b=7

    setTimeout(() => {
        if(a===b){
            resolve('The values are equal.')
        }else{
            reject('The values are not equal.')
        }
    }, 2000);
})

console.log(myPromise)

myPromise.then(function(result){
    console.log(result)
})

myPromise.catch(function(failedResult){
    console.log(failedResult)
})

