//maps in javascript

const myMap=new Map()
console.log(myMap)

const key1='mystr', key2={},key3=function(){}

//set map values

myMap.set(key1,'this is a string')
myMap.set(key2,'this is a blank obj')
myMap.set(key3,'this is a empty function')

console.log(myMap)

//getting the values from map

let value1=myMap.get(key2);
console.log(value1);

console.log(myMap.size)

for(let [key,value] of myMap)
{
    console.log(key,value);
}

for(let key of myMap.keys()){
    console.log(key)
}

myMap.forEach((value,key)=>{
    console.log(key)
    console.log(value)
})


//converting map to array
let myArray=Array.from(myMap)
console.log(myArray)

let mykeyArray=Array.from(myMap.keys())
console.log(myArray)

let myvalueArray=Array.from(myMap.values())
console.log(myArray)
