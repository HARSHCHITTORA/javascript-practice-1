let element=document.createElement('li')
let text=document.createTextNode('i ama a node')
element.appendChild(text)
element.className='childul'
element.id='createli'
// element.innerText="hello harsh"
let ul=document.querySelector("ul.this")
ul.appendChild(element)
console.log(element)


let elem2=document.createElement("h3")
elem2.id='elem2'
elem2.className='elem2'
let tnode=document.createTextNode("new node")
elem2.appendChild(tnode)

element.replaceWith(elem2)


let myul=document.getElementById('myul')
myul.replaceChild(element,document.getElementById('fui'))
myul.removeChild(document.getElementById('lui'))

let pr=elem2.hasAttribute('href')

console.log(pr)