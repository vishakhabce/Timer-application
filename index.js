
function start()
{
    const hourTimer = document.querySelector(".hour-timer").value;
    const minTimer = document.querySelector(".min-timer").value;
    const secTimer = document.querySelector(".sec-timer").value;

    let totalSecondCount = parseInt(hourTimer* 3600)  + parseInt(minTimer* 60) + parseInt(secTimer);
    if(totalSecondCount<=0)
    {
        alert("Please enter valid time")
        return;
    }
    document.querySelector(".timer-input").classList.add("hidden");
    document.querySelector(".value").classList.remove("hidden");
    timerInterval = setInterval(()=>{
        document.querySelector("#hour").innerHTML = Math.floor(totalSecondCount / 3600);
        document.querySelector("#minute").innerHTML = Math.floor((totalSecondCount % 3600) / 60);
        document.querySelector("#second").innerHTML = totalSecondCount % 60;


        if (totalSecondCount <= 0) {
            clearInterval(timerInterval);
            document.getElementById('audio').play();
            alert("TIME UP");
          } else {
            totalSecondCount--;
          }

    },1000)
}

function stop(){
    clearInterval(timerInterval);
    document.querySelector(".hour-timer").value=0;
    document.querySelector(".min-timer").value=0;
    document.querySelector(".sec-timer").value=0;
    document.querySelector(".timer-input").classList.remove("hidden");
    document.querySelector(".value").classList.add("hidden");
}

function reset(){
    document.querySelector(".hour-timer").value=0;
    document.querySelector(".min-timer").value=0;
    document.querySelector(".sec-timer").value=0;
    document.querySelector(".timer-input").classList.remove("hidden");
    document.querySelector(".value").classList.add("hidden");
}