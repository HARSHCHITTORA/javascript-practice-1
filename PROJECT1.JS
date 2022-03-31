//if user add note add in local storage
shownotes()
let addBtn = document.getElementById('addBtn')

addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem("notes")//local storage ne jo bhi notes name se item set kiya ho wo dedo
    let addTitle=document.getElementById("title")
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myobj={
        title:addTitle.value,
        text:addTxt.value
    }
    notesobj.push(myobj)
    localStorage.setItem("notes", JSON.stringify(notesobj))
    addTxt.value = "";
    addTitle.value=""
    // console.log(notesobj)
    shownotes()
})


function shownotes()
{
   let notes=localStorage.getItem("notes")
   
   if (notes == null) {
    notesobj = [];
}
else {
    notesobj = JSON.parse(notes);
}
let html=""
notesobj.forEach(function(element,index) {

   html += `<div  class="noteCard my-2 mx-2 card" style="width: 18rem;">
  <div class="card-body">
      <h5 class="card-title">${element.title}
      <p class="card-text">${element.text}</p>
      <button id="${index}" onclick="DeleteNote(this.id)" class="btn btn-primary">Delete note</button>
  </div>
  </div>`
  
})
let noteEle=document.getElementById("notes")
if(notesobj.length!=0)
{
    noteEle.innerHTML=html
}
else{
    noteEle.innerHTML=`nothing to show !"use add a note"`
}
}

function DeleteNote(index)
{
//    console.log("i am deleting a node")
   let notes=localStorage.getItem("notes")
   
   if (notes == null) {
    notesobj = [];
}
else {
    notesobj = JSON.parse(notes);
}
notesobj.splice(index,1);
localStorage.setItem("notes", JSON.stringify(notesobj))
shownotes()
}

let searchTxt= document.getElementById('searchTxt')
searchTxt.addEventListener("input",function(){
    let inputVal=searchTxt.value
    console.log("input event field",inputVal)
    let noteCard=document.getElementsByClassName("noteCard")
 Array.from(noteCard).forEach(element => {
    let cardTxt=element.getElementsByTagName("p")[0].innerText
    // console.log(cardTxt)
    if(cardTxt.includes(inputVal)){
        element.style.display="block"
    }
    else{
        element.style.display="none"
    }
 });
})
 