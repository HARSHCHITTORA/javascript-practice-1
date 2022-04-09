let impArray=['adarak','pyaz','bhindi']

localStorage.setItem('Name','Harsh');
localStorage.setItem('Name2','rohan')
//localStorage.setItem('sabzi',impArray)//it stores aray in form ofshting
localStorage.setItem('sabzi',JSON.stringify(impArray))// ye bhi use string ki form me store karga per JSON.parse se hum wapas array me badal denge.//it take object and return string
//localStorage.clear()//clear entire local storage

//remove a perticular key value
let Name=localStorage.getItem('Name');
console.log(Name)

localStorage.removeItem('Name')
// name_=localStorage.getItem('sabzi')
name_=JSON.parse(localStorage.getItem('sabzi'))//it take string and convert it into object
console.log(name_)

sessionStorage.setItem('sessionName','Harsh');
sessionStorage.setItem('sessionName2','rohan')
sessionStorage.setItem('sessionsabzi',JSON.stringify(impArray))// ye bhi use string ki form me store karga per JSON.parse se hum wapas array me badal denge.//it take object and return string
//localStorage.clear()//clear entire local storage
 