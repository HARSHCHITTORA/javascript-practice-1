let btn=document.getElementById('btn')
btn.addEventListener('click',function(e){
      console.log("thanks",e)
      e.preventDefault();//to bypass default event
})


document.querySelector('.container').addEventListener('mousemove',function(e)
{
    console.log("this is mosecenter")
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},${e.offsetY})`
    console.log('you enter mouse event')
})