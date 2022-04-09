let reg=/harsh/  //this is regular expression literral in js
//g matlab global flag matlab puri string me jini bar harsh ho use dhoond ker index do

//  reg=/harsh/i   //i means case insensititve means harsh kese bhi likha ho chota ya bdha
reg=/harsh/g
// console.log(reg) 
// console.log(reg.source); //regular expression ke andar ka masala


//functions to match expression

let s="this is a great harsh and also harsh"

// 1.exec()-this function will return an array for match or null for no match
let result=reg.exec(s); 
// if(result){

// console.log(result)
// result=reg.exec(s);
// console.log(result)
// }

//2. test()-return true or false

// let result2=reg.test(s);
// console.log(result2)  //this will only print true if the "reg" is there in the string "a"

// 3. match() =>  it will return an array of result or null

// let result3=reg.match(s)=>this is wrong 

//  let result3=s.match(reg) //--->this is right

// console.log(result3)

// 4.search()   returns index of first match else -1

let result4=s.search(reg)
console.log(result4)

//  s.replace returns new replaced string with all the replacement if no global flag is givrn 1st match will be replaced

let result5=s.replace(reg,"harry")
console.log(result5)







