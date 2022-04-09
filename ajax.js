let fetchBtn = document.getElementById('fetchBtn')

fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('you have clicked the button')
    //instance an xhr onject
    const xhr = new XMLHttpRequest();

    //oPEN the object 
    xhr.open('GET', 'harsh.txt', true) //true means asynchronous 

    //what to do on progress
    xhr.onprogress = function () {
        console.log("ONPROGRESS")
    }

    xhr.onload = function () {
    
        if(this.status===200)
        {
        let obj=JSON.parse(this.responseText)
        console.log(obj)
        let list=document.getElementById('list')

        str='';
        for(key in obj)
        {
            str+=`{<l1> &obj[key].employee_name}</li>`

        }
        list.innerHTML=str
    }
    else{
            console.log("some error occured")
    }

    
}
xhr.send();
}