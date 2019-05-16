function calDayDifference() {
  let days = [];
  let startDate = new Date();
  let myDate = document.getElementById('myDate').value;
  let endDate = new Date(myDate);
  let i = 0;
  while (startDate <= endDate) {
    startDate.setDate(startDate.getDate() + 1);
    i++;
  }
  console.log(i);
  document.getElementById('day_diff').innerHTML = i;
}


function getWorkingDays() {
  var result = 0;
  var currentDate = new Date();
  let myDate = document.getElementById('myDate').value;
  let endDate = new Date(myDate);
  while (currentDate <= endDate) {

    var weekDay = currentDate.getDay();
    if (weekDay != 0 && weekDay != 6)
      result++;

    currentDate.setDate(currentDate.getDate() + 1);
  }

  console.log(result);
  document.getElementById('working_days').innerHTML = result;
}

function realTime() {
  let startDate = new Date();
  let myDate = document.getElementById('myDate').value;
  let endDate = new Date(myDate);
  let diff = Math.abs(endDate - startDate);
  ms = diff % 1000;
  diff = (diff - ms) / 1000;
  ss = diff % 60;
  diff = (diff - ss) / 60;
  mm = diff % 60;
  diff = (diff - mm) / 60;
  hh = diff % 24;
  days = (diff - hh) / 24;

  console.log(days + "Days:" + hh + "hours:" + mm + "mins:" + ss + "sec:" + ms + "ms");
  document.getElementById('time_diff').innerHTML = days + "Days:" + hh + "hours:" + mm + "mins:" + ss + "sec:" + ms + "ms";
}
