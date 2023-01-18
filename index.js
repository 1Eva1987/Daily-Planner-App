var currentDateEl = $("#currentDay");

// Display the current day at the top of the calender
currentDateEl.text(moment().format("dddd") + ", " + moment().format("MMMM Do"));
