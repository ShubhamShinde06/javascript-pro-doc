let [seconds, minites, hours] = [0,0,0];
let display = document.getElementById("displaytime")
let timer = null

function WatchStart(){
    seconds++;
    if(seconds == 60)
    {
        seconds = 0;
        minites++;
        if(minites == 60)
        {
            minites = 0;
            hours++;
        }
    }
    display.innerHTML = hours + ":" + minites + ":" + seconds
}

function startWatch(){
    if(timer!==null)
    {
        clearInterval(timer) 
    }
    timer = setInterval(WatchStart, 1000)
}

function restartWatch(){
    seconds = 0;
    minites = 0;
    hours = 0;

    display.innerHTML = hours + ":" + minites + ":" + seconds
}

function stopWatch(){
    clearInterval(timer)
}