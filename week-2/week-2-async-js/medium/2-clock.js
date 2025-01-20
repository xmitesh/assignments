// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function startClock(){
    console.clear();
    let time = new Date();
    console.log("24 HOUR FORMAT : " + time.getHours().toString().padStart(2,'0') + ":" + time.getMinutes() + ":" + time.getSeconds());
    console.log("12 HOUR FORMAT : " + (time.getHours()%12).toString().padStart(2,'0') + ":" + time.getMinutes() + ":" + time.getSeconds() + " " + ampm());
    function ampm(){
        if(time.getHours()/12 > 1) return "PM";
        else return "AM" ;
    }
}

setInterval(startClock,1000); 
