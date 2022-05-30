var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
      center: "title",
      left: "prevYear,prev,next,nextYear"
    },
    events: [
      {
        title: "Sales Meeting",
        start: new Date(y, m, 2, 10, 30),
        end: new Date(y, m, 2, 11, 30),
        allDay: true
      },
      {
        title: "Marketing Meeting",
        start: new Date(y, m, 3, 11, 30),
        end: new Date(y, m, 3, 12, 30),
        allDay: false
      },
      {
        title: "Production Meeting",
        start: new Date(y, m, 4, 15, 30),
        end: new Date(y, m, 4, 16, 30),
        allDay: false
      }
    ]
  });

  calendar.render();
});