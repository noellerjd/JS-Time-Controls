const clockBtn = document.getElementById("clock-btn");

const clockAMPM = document.getElementById("AMPM");
const clock24h = document.getElementById("24h");

var t1;
var t2;
var d1;

function currentDate() {
  d1 = setInterval(function () {
    let date = new Date();
    let weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dateNow = date.toLocaleDateString();
    let day = weekday[date.getDay()];

    document.getElementById("date").innerHTML = day + " " + dateNow;
  }, 1000);
}

function hours12(date) { return (date.getHours() + 24) % 12 || 12; }

// Time Toggles
function toggleAMPM() {
  if (document.getElementById("time").className === "AMPM") {
    t1 = setInterval(function () {
      let date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let seconds = date.getSeconds();
      var ampm = "";
      
      // console.log(hour)
      
      if ((hour) > 11) {
        var ampm = "PM";
      } else if ((hour) < 12) {
        var ampm = "AM";
      }


      if (minute < 10) {
        minute = "0" + minute;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      document.getElementById("time").innerHTML =
        hours12(date) + ":" + minute + ":" + seconds + " " + ampm;
    }, 1000);
  }
  document.getElementById("time").className = "AMPM";
}

function toggle24h() {
  if (document.getElementById("time").className === "24hr") {
    t2 = setInterval(function () {
      let date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let seconds = date.getSeconds();

      if (minute < 10) {
        minute = "0" + minute;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      document.getElementById("time").innerHTML =
        hour + ":" + minute + ":" + seconds;
    }, 1000);
  }
}

// calender toggles

function clockToggle() {
  if (document.getElementById("time").className === "AMPM") {
    clearInterval(t1);
    document.getElementById("time").className = "24hr";
    toggle24h();
  } else {
    clearInterval(t2);
    document.getElementById("time").className = "AMPM";
    toggleAMPM();
  }
}

function calenderToggle() {
  if (document.getElementById("date").className === "show-date") {
    clearInterval(d1);
    document.getElementById("date").className = "hide-date";
    document.getElementById("date").style.display = "none";
  } else if (document.getElementById("date").className === "hide-date") {
    currentDate();
    document.getElementById("date").className = "show-date";
    document.getElementById("date").style.display = "block";
  }
}

clockToggle();
currentDate();
