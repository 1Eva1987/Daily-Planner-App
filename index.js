var currentDateEl = $("#currentDay");
var timeBlocks = $(".container");

// Display the current day at the top of the calender
currentDateEl.text(moment().format("dddd") + ", " + moment().format("MMMM Do"));

// Create time blocks dynamically
for (var i = 9; i < 18; i++) {
  // row element
  var rowEl = $("<div>");
  rowEl.addClass("row");
  // columns
  var colTime = $("<div>");
  colTime.addClass("col-2 col-lg-1 hour");
  showHour(i);
  var colText = $("<textarea>");
  applyCollor(i);
  colText.addClass("col-8 col-lg-10 text-area");
  colText.attr("data-index", i).attr("style", "color: black");
  var colBtn = $("<button>");
  colBtn.addClass("col-2 col-lg-1 saveBtn");
  colBtn.attr("data-number", i);
  var iEl = $("<i>");
  iEl.addClass("fas fa-save ");
  colBtn.append(iEl);
  // add columns to row
  rowEl.append(colTime);
  rowEl.append(colText);
  rowEl.append(colBtn);
  // add row to timeBlocks
  timeBlocks.append(rowEl);
  // getting saved entries from local storage
  colText.text(localStorage.getItem(i));
}

// Save button click event / saving entry in a local storage
timeBlocks.on("click", ".saveBtn", function (e) {
  e.preventDefault();
  var buttonNumber = $(e.target).attr("data-number");
  var textValue = $(e.target).parent().children().eq(1).val();
  // setting local storage
  localStorage.setItem(buttonNumber, textValue);
});

// Click event if user clicks icon inside the save button
$(".saveBtn").on("click", ".fas", function (e) {
  e.preventDefault();
  var buttonNumber = $(e.target).parent().attr("data-number");
  var textValue = $(e.target).parent().parent().children().eq(1).val();
  localStorage.setItem(buttonNumber, textValue);
});

// Function to show time am/pm instead of number
function showHour(hour) {
  if (hour > 12) {
    var evening = hour - 12;
    colTime.text(evening + "PM");
  } else if (hour < 12) {
    colTime.text(hour + "AM");
  } else {
    colTime.text(hour + "PM");
  }
}

// Function to apply collor based on time
function applyCollor(number) {
  var currentTime = moment().hour();
  if (number < currentTime) {
    colText.addClass("past");
  } else if (number > currentTime) {
    colText.addClass("future");
  } else {
    colText.addClass("present");
  }
}
