const alarmSubmit=document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click',setAlarm)
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');


function ringBell()
{
    audio.play()
}



function setAlarm(e){
    e.preventDefault()
    console.log("setting Alarm...")
    const alarm=document.getElementById('alarm')
    alarmDate=new Date(alarm.value)
    console.log(`setting Alrm for ${alarmDate}...`)
    now=new Date();
    let timeToAlarm=alarmDate - now
    console.log(timeToAlarm)

    if(timeToAlarm>=0)
    {
        setTimeout(() => {
            ringBell()
        }, timeToAlarm);
    }
}