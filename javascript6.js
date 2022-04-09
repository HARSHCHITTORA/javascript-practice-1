function func1()
{
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error=true;
            if(!error)
            {
                console.log("your promise has been resolved")
                resolve();
            }
            else{
                console.log('your promise has not been resolved')
                reject('sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function()
{
    console.log("thanks for resolving")

}).catch(function(error){
    console.log("harry :vary bad bro"+ error)
})
