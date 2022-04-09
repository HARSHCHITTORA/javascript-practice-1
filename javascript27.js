 const sym1=Symbol('my identifier')
 const sym2=Symbol('my identifier')


 console.log(sym1===sym2)


 const k1=Symbol('this is identifirer ')
 const k2=Symbol()


 myobj={}
 myobj[k1]='harsh'
 myobj[k2]='rohan'
 myobj["name"]="good boy"

 console.log(myobj)
 console.log(myobj.k1)//not used this
 console.log(myobj[k1])


 //sumbols ignore in for in loop
 for(key in myobj){
     console.log(key,myobj[key])
 }

 console.log(JSON.stringify(myobj))



