let mybtn=document.getElementById("mybtn")
let content=document.getElementById("content")

function getdata()
{
    url="https://jsonplaceholder.typicode.com/todos/1"
    fetch(url).then((response)=>{
       return response.json()
    }).then((data)=>{
           console.log(data)
    })
}

function postdata()
{
    url="https://reqres.in/api/users"
  data='{"name": "morpheus","job": "leader"}'


    params={
      method:'post',
      headers:{
          'content-type':'application/json'
      },
     
  }
    fetch(url,params).then(response=> response.json()).then((data)=>{
           console.log(data)
    }) 
}
postdata()
