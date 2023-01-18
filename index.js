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
  colTime.text(i);
  var colText = $("<textarea>");
  colText.addClass("col-8 col-lg-10");
  var colBtn = $("<button>");
  colBtn.addClass("col-2 col-lg-1 saveBtn");
  var iEl = $("<i>");
  iEl.addClass("fas fa-save");
  colBtn.append(iEl);
  // add columns to row
  rowEl.append(colTime);
  rowEl.append(colText);
  rowEl.append(colBtn);
  // add row to timeBlocks
  timeBlocks.append(rowEl);
}

// lay out
/* <div class="row  time-block">
  <div class="col-2 col-lg-1 hour" col-sm-2>
    9AM
  </div>
  <textarea class="col-8 col-lg-10 past">my text1</textarea>
  <button class="col-2 col-lg-1 saveBtn">
    <i class="fas fa-save "></i>
  </button>
</div>; */
