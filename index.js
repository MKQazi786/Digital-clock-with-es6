let hour = document.querySelector("#hour")
let minute = document.querySelector("#minutes")
let second = document.querySelector("#seconds")
setInterval(() => {
    let date = new Date();
    let formattedDate = date.getDate().toString().padStart(2, "0") + "/" + (date.getMonth() + 1).toString().padStart(2, "0") + "/" + date.getFullYear();

    document.querySelector("#date").innerHTML = formattedDate
    let elemHour = date.getHours().toString();

    let elemMinute = date.getMinutes().toString().padStart(2, "0")
    let elemSecond = date.getSeconds().toString().padStart(2, "0")

    let amPm = elemHour > 11 ? "PM" : "AM";

    if (elemHour === "0") {
        elemHour = 12;
    } else if (elemHour > 12) {
        elemHour = elemHour - 12
        
    } 
        if (elemHour < 10) {
            elemHour = "0" + elemHour;
    }

    hour.innerText = elemHour
    minute.innerText = elemMinute
    second.innerText = elemSecond
    document.querySelector("#amPm").innerHTML = amPm

}, 1000);