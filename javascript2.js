document.getElementById('heading').addEventListener('click',function(e){
    let variable;
    console.log('you have clicked the heading')
   // location.href='//codewithharry.com'
   variable=e.target;
   variable=e.target.className;

   console.log(variable)
});