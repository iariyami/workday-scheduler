$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  $(".save").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");

    //set items in local storage.
    localStorage.setItem(time, text);
  });
  //load any saved data from LocalStorage - do this for each hour created.
  $("#time1 .task").val(localStorage.getItem("time1"));
  $("#time2 .task").val(localStorage.getItem("time2"));
  $("#time3 .task").val(localStorage.getItem("time3"));
  $("#time4 .task").val(localStorage.getItem("time4"));
  $("#time5 .task").val(localStorage.getItem("time5"));
  $("#time6 .task").val(localStorage.getItem("time6"));
  $("#time7 .task").val(localStorage.getItem("time7"));
  $("#time8 .task").val(localStorage.getItem("time8"));
  $("#time9 .task").val(localStorage.getItem("time9"));
  $("#time10 .task").val(localStorage.getItem("time10"));

  for (var i = 8; i < 18; i++) {
    if (i < currentHour) {
      document.getElementById(i.toString()).classList.add("past");
    } else if (i === currentHour) {
      document.getElementById(i.toString()).classList.add("present");
    } else if (i > currentHour) {
      document.getElementById(i.toString()).classList.add("future");
    }
    console.log([currentHour]);
  }
});
