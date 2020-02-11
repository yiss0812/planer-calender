function todaydate() {

    var date = moment().format("dddd,MMMM, Do");
    var display =$("#currentDay");
    display.text(date);
};

todaydate();

var time =[$("#time-9"), $("#time-10"), $("#time-11"), $("#time-12"),$("#time-1"),$("#time-2"),
$("#time-3"), $("#time-4"), $("#time-5")]

function displayTime() {
    var start = 9
    for (var i = 0; i < time.length; i ++ ) {
        var hour = moment(start, "HHA").format("HHA");
        time[i].text(hour);
        start++ 
    }
}



displayTime ()

$(".save").on("click", function(){
    var value = $(this).parent().siblings().children(".description").val()
    var time = $(this).parent().parent().attr("id")
    localStorage.setItem(time,value)
})

$(document).ready(function(){
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#1 .description").val(localStorage.getItem("1"));
    $("#2 .description").val(localStorage.getItem("2"));
    $("#3 .description").val(localStorage.getItem("3"));
    $("#4 .description").val(localStorage.getItem("4"));
    $("#5 .description").val(localStorage.getItem("5"));
});
