    var min = 0
    var sec = 0
    var milisec= 0
    var min_id = document.getElementById('min'),innerText
    var sec_id = document.getElementById('sec'),innerText
    var milisec_id = document.getElementById('milisec'),innerText
    var interval2
    console.log(min,sec,milisec)

    function start(){
        setInterval(timer,10)
        document.getElementById('start').setAttribute('diabled',true)
        document.getElementById('pause').setAttribute('diabled',false)
        document.getElementById('reset').setAttribute('diabled',false)



    }
    function timer(){
        milisec++;
        milisec_id.innerHTML = milisec

        if(milisec>10){
            sec++;

        }

    }

    funtion

    function reset(){
        milisec = 0
        sec = 0
        min = 0
        milisec_id.innerHTML=milisec
        sec_id.innerHTML = sec
        min_id.innerHTML = min

    }