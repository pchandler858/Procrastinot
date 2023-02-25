$(function () {
  // Update current time every second
  setInterval(function () {
    // Get current time using Day.js
    var currentTime = dayjs().format("h:mm:ss A");

    // Display current time in the header
    $("#currentTime").text(currentTime);
  }, 1000); // Update every second

  // Get current hour in 24-hour format using Day.js
  var currentHour = dayjs().format("H");
  console.log("Current Hour: ", currentHour);

  // Apply past, present, or future class to each time-block
  $(".time-block").each(function () {
    var hour = $(this).attr("id").split("-")[1];
    console.log(hour);
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour == currentHour) {
      $(this).addClass("present");
    } else if (hour > currentHour) {
      $(this).addClass("future");
    }
  });

  // Get saved user input from localStorage and set textarea values
  $(".time-block textarea").each(function () {
    var key = $(this).parent().attr("id");
    var value = localStorage.getItem(key);
    if (value !== null) {
      $(this).val(value);
    }
  });

  // Save user input to localStorage when save button is clicked
  $(".time-block button").on("click", function () {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings("textarea").val();
    localStorage.setItem(key, value);
  });

  // Display current date in header of page
  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);
});
