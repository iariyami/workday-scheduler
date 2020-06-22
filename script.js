$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  // Adding a save feature for each tie block
  $(".saveBtn").on("click", function () {
    // Creating variables to store user input insode of
    var text = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");

    // Setting the items in local storage.
    localStorage.setItem(time, text);
  });
  // Loading the dated in the Local Storage
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

  // Changing the colors of the rows depending on the hour of the workday
  if (i > moment().hours()) {
    textField.addClass("future");
  } else if (i < moment().hours()) {
    textField.addClass("past");
  } else if (i == moment().hours()) {
    textField.addClass("present");
  }
});
