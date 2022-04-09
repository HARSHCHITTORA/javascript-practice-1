//iterating an object

let obj={
    name:"harsh",
    language:"javascript",
    hobbies:"youtuber"
}

//iterating an object

// for(let index=0;index<Object.keys(obj).length;index++)
// {
//     const element=obj[Object.keys(obj)[index]];
//     console.log(element)
// }


//better way

// for(let key in obj){
//     console.log(obj[key]);
// }

// mystring="this is my string"
// for(let char in mystring)
// {
//     console.log(mystring[char])
// }

people=["harsh","arav","aman","noob"]

for(let name of people){
    console.log(name)
}