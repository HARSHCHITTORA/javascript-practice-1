let mybtn=document.getElementById("mybtn")

let content=document.getElementById("content")

function getData()
{   url='https://api.github.com/users'
    fetch(url).then((response)=>
    {   console.log("inside first then")
        return response.json();
    }).then((data)=>{
        console.log("inseide second then")
        console.log(data)
    })
}


console.log("before running")
getData()
console.log("after running")