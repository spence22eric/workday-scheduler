let textInput = $("#text-input");

let now = new Date($.now());
let currentDate = moment(now).format('dddd MMM Do');
$("#currentDay").html(currentDate);

let currentHour = new Date(now).getHours()
console.log(currentHour);
$(document).ready(function () {

    for (let i = 0; i < 9; i++) {
        let id = "#hour-" + i;
        let hour = 9 + i;

        if (hour < currentHour) {
            $(id).addClass("past");
        }
        else if (hour === currentHour) {
            $(id).addClass("present");
        }
        else {
            $(id).addClass("future");
        }
    }
});

let saveData = function() {
    // let inputHour = $(".textarea").val;
    console.log("I am a working function/event listener");
    
};

$("#save-btn").click(saveData);