$(document).ready(function () {

    let textInput = $(".textarea");

    let now = new Date($.now());
    let currentDate = moment(now).format('dddd MMM Do');
    $("#currentDay").html(currentDate);

    let currentHour = new Date(now).getHours();
    // console.log(currentHour);

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

$(".saveBtn").click(function () {
    var value = $(this)
        .siblings(".textarea")
        .val();

    var time = $(this)
    .parent()
    .attr("id");

    localStorage.setItem(time, value);
    console.log(value);    
});

$('#hour0 .textarea').val(localStorage.getItem("hour0"))
$('#hour1 .textarea').val(localStorage.getItem("hour1"))
$('#hour2 .textarea').val(localStorage.getItem("hour2"))
$('#hour3 .textarea').val(localStorage.getItem("hour3"))
$('#hour4 .textarea').val(localStorage.getItem("hour4"))
$('#hour5 .textarea').val(localStorage.getItem("hour5"))
$('#hour6 .textarea').val(localStorage.getItem("hour6"))
$('#hour7 .textarea').val(localStorage.getItem("hour7"))


