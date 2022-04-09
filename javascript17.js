 let regex=/harsh/;
//let look some metachracater symbol
regex=/^har/  //^ means matc the string start with 
regex=/sh$/   //$ means match the string end with
regex=/h.rsh/  //. mens any one character came in this
regex=/h*rsh/  // * mens many character came in between this
regex=/ha?rsha?/  // `? means optional a ho ya na ho koi farak nahi padega` 
regex=/h\*rsh/   //it means with \ you can use metacharacter as character
let str= "h*rsh is a good boy,harsh is youtuber"

 let result=regex.exec(str)
 console.log("thid id exec result",result)

 if(regex.test(str))
 {
     console.log(`the string ${str} matches the expression ${regex.source}`)

 }
 else{
     console.log(`the string ${str} does not matches the expression ${regex.source}`)
 }

