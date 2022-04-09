const mySet=new Set()

//Adding values to this set

mySet.add('this')
mySet.add('My name')
mySet.add('My name')

console.log('the set looks like this now:',mySet);

let mySet2=new Set([1,45,'this','false',{a:4,b:8},'this'])

console.log('new set',mySet2)

console.log(mySet2.has('this'))

console.log("element before remove",mySet.has('this'))
mySet.delete('this')
console.log("element after remove",mySet.has('this'))




for(let item of mySet)
{
 console.log('item is:',item)   
}

mySet.forEach(item => {
    console.log(item)
});

array=Array.from(mySet);

for(let item of array){
console.log(array)}
