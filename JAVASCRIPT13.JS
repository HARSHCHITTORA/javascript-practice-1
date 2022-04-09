//    //async ek promise return kerta he

//    async function harsh(){
//        console.log('inside harry function');
//        return "harsh";
//    }

//    console.log("before calling")
//    let a=harsh()
//    console.log("after calling harry")
//    console.log(a)
//    console.log("last line of this js file")


   //async ek promise return kerta he
   //jha await likhte hen wha se control wapas chla jata he 

   async function harsh(){
    console.log('inside harry function');
    const response=await fetch("https://api.github.com/users")//await dekh ker flow wapas chla jayega or thodi der bad ayega per ye promise he to ye resolve jaroor hogi
    console.log("before response")
    const users=await response.json()
    console.log("users  resolved")
    
    return users;
}

console.log("before calling")
let a=harsh()
console.log("after calling harry")
console.log(a)
a.then(data =>console.log(data))//promise abhi resolve nahi hua isliye ye execute nahi hoga
console.log("last line of this js file")