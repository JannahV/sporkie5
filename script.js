var todayDate = moment().format("dddd, MMMM Do YYYY");
$("#currentHour").html(todayDate);
$(document).ready(function () {
  $(".save-button").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  function timeTracker() {
    var currentHour = moment().hour();
    var timeNow = moment().hour();
    $(".time-block").each(function () {
      var blockTime = parseInt($(this)).attr("id").split("hour")[1];
      if (blockTime < timeNow) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });

    function changeClass(jQueryObj) {
      $(jQueryObj).addClass("past");
    }

    console.log(calenderContainer);
    calenderContainer.on("click", ".save-button");

    function saveCalenderEvent(event) {
      var saveRow = $(event.target).parent();
      var rowId = saveRow.attr("id");

      var textToSave = saveRow.children(".description").eq(0).val();
      localStorage.setItem(rowId, textToSave);
      console.log(saveRow.children(".description").eq(0).val());
    }

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour1"));
    $("#hour14 .description").val(localStorage.getItem("hour2"));
    $("#hour15 .description").val(localStorage.getItem("hour3"));
    $("#hour16 .description").val(localStorage.getItem("hour4"));
    $("#hour17 .description").val(localStorage.getItem("hour5"));
    $("#hour18 .description").val(localStorage.getItem("hour6"));
  }

  timeTracker();
});
