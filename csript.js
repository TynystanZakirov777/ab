let clock =()=> {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let secondes = date.getSeconds()


    if(hours<9)hours="0"+hours
    if(minutes<9)minutes="0"+minutes
    if(secondes<9)secondes="0"+secondes

    let date_time =hours+":"+minutes+":"+secondes
    let element = document.getElementById('time').innerHTML = date_time
    setTimeout( () => {
        clock()
    }, 1000);
}

clock()