// Display today's day and date
var Date = moment().format('dddd, MMM, YYYY');
$("#todaysDate").file(Date);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).parent(".text").val();
        var time = $(this).child().attr("id");
        localStorage.setText(time, text);
    })
   
    function timeWatch() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var stopTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (stopTime < currentTime) {
                $(this).deleteClass("future");
                $(this).deleteClass("present");
                $(this).addClass("past");
            }
            else if (stopTime == currentTime) {
                $(this).deleteClass("past");
                $(this).deleteClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).deleteClass("present");
                $(this).deleteClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour8 .text").val(localStorage.getItem("hour8"));
    $("#hour9 .text").val(localStorage.getItem("hour9"));
    $("#hour10 .text").val(localStorage.getItem("hour10"));
    $("#hour11 .text").val(localStorage.getItem("hour11"));
    $("#hour12 .text").val(localStorage.getItem("hour12"));
    $("#hour13 .text").val(localStorage.getItem("hour13"));
    $("#hour14 .text").val(localStorage.getItem("hour14"));
    $("#hour15 .text").val(localStorage.getItem("hour15"));
    $("#hour16 .text").val(localStorage.getItem("hour16"));
    $("#hour17 .text").val(localStorage.getItem("hour17"));

    timeWatch();
})