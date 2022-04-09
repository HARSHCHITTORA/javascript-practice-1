const students=[
    {name:"harsh",subject:"python"},
    {name:"priyansh",subject:"math"}
]

function enroll(student){
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             students.push(student)
             console.log("student enrolled")
             const error=false;
             if(!error)
             {
                resolve()
             }
             else{
                 reject()
             }
            
         }, 1000);

     });
}

function getStudents()
{
    setTimeout(() => {
        let str=""
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
        })
        document.getElementById("students").innerHTML=str
        console.log("student is enrolled")
    }, 5000);
}

let newStudent={name:"hardik",subject:"english"}
enroll(newStudent).then(getStudents).catch(function(){
    console.log("not added")
})