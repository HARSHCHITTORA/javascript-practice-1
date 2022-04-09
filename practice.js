//document.getElementById("count-el").innerText=5



//  let myage=20
//  let humanDogRatio=12
//  let mydogage=myage*humanDogRatio;
 
//  console.log(mydogage)

let saveEl = document.getElementById("save-al")
let countEl = document.getElementById("count-el")

let count=0
console.log(saveEl)

function increment()
 {
   count=count+1;
  //  countEl.innerText=count
  countEl.textContent =count
 }

 function save()
 {   let countStr=count+" - "
    //  saveEl.innerText += countStr
    saveEl.textContent += countStr
     console.log(count)
     countEl.textContent=0;
     count=0;
 }

// let message="harsh"
// let message2="logged"
// console.log(message+","+message2+"!")

// let name_="harsh"
// let greeting="hi "

// let mygreeting=greeting + name_
// console.log(mygreeting)
