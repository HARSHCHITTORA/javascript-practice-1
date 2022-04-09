
let regex=/h[a-z]rsh/  //[a-z] iske beech mea to z kuch bhii daldo match ho jayega
 regex=/h[ary]rsh/  // match ho jayega kyo ki ary me se a match ho jayeg
 regex=/h[^aty]rsh/  // character except a t y
 regex=/h[^aty]rr[yu]/ //can be at a,t or y + can be u or y
 regex=/h[a-zA-Z]rs[hd0-9]/
 regex=/har{2}h/  //r can occur 2 times
 regex=/har{0,2}y/ //r can occur exactly o to 2(0 or 1 or 2) times
 
 regex=/(har){2}/  //har 2 times 
 rgex=/(har){2}({0-9}r){3}/
 let str= "hars9 is a good boy,harsh is youtuber"
     str="harhar1r4r5r bhai"
 let result=regex.exec(str)
 console.log("thid id exec result",result)

 if(regex.test(str))
 {
     console.log(`the string ${str} matches the expression ${regex.source}`)

 }
 else{
     console.log(`the string ${str} does not matches the expression ${regex.source}`)
 }

