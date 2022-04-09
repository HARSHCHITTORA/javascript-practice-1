//error handling

//pretend this is coming frgom the user

let a="hash bhai"
a=undefined
if(a!=undefined)
{
    throw new Error('this is not undefined')

}
else{
    console.log("this is undefined")
}

try {
     functionharsh()  //ye defined nahi he error throw karega per hum use cstch ki madat se handle kerlenge
} catch (error) {
    console.log(error.message)
}
finally{
    console.log("finally we will run thins")
} //chaye try ho ye catch ise to run kerdo