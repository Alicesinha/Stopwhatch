
var timer
var hour = 0
var minute = 0
var seconds = 0

function start(){
    timer = window.setInterval( watch, 1000)
}

function stop(){
    clearInterval(timer)
}

function reset(){
    clearInterval(timer)
    hour = 0
    minute = 0
    seconds = 0
    let h = document.getElementById("h1")
    h.innerText =  "00:00:00"
}

function watch() {
   seconds++

   if (seconds == 60){
       seconds = 0
       minute++
   }
   if (minute == 60){
       minute = 0
    hour++
   }

   var stopWatch = hour + ":" + minute + ":" + seconds
   document.getElementById("h1").innerText = stopWatch
}

