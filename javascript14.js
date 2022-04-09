async function harsh(){
    console.log("inside harsh")
    const response=await fetch("https://api.github.com/users")
    console.log("before respoonse")
    const user=await response.json()
    console.log("after response")
    return user
}

console.log("before calling")
let a=harsh()
console.log("after calling")
a.then(data=>console.log(data))
