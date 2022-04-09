let regex=/\wrsh/        // word character - _or alphabet or number
    regex=/\w+rsh/       // \w+ means one or more character character
regex=/\Wbhai/           // \W  (capital w) non word character
    regex=/\W+/          //\w+ more than one non word character 
    regex=/number \d999/ //\d+ means digit
    regex=/number \d+/   //\d+ means more than one digit
    regex=/\D999/        // \D means non digit number
    regex=/\D+999/       // \D+ more tha one non digit
    regex=/\ska number/   // macbes white space
    regex=/\s+ka number/
    regex=/\Ska number/  // match non white space character
    regex=/4r5r\b/ //word boundary

    
    
    
    str="hshbarshar1r4r5r $%$%$^bhai ika number is 89999999"

//assertions
 regex =/h(?=y)/  //iska matlab h ke bad mujhe ek y chayiye
 regex=/h(?!=y)/ // he ke badd kuch bhi ho per y na ho
 
 



let result=regex.exec(str)
console.log("thid id exec result",result)

if(regex.test(str))
{
    console.log(`the string ${str} matches the expression ${regex.source}`)

}
else{
    console.log(`the string ${str} does not matches the expression ${regex.source}`)
}