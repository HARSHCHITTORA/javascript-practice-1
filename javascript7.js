function func1()
{
    return new Promise(function(resolve,reject){
        setTimeout(() => {
           const error=true;
            if(!error)
            {
                console.log("errror is resolved")
                resolve()
            }
            else{
                console.log("error not resoved")
                reject("sorry not fulfilled")
            }
        }, 2000);
        
    })
}

func1().then(function(){
    console.log("thanks for resolving")
}).catch(function(error)
{
    console.log("sorry")
})