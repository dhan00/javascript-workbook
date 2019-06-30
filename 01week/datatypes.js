var today = new Date();
console.log(today);

var day = today.getDay();
console.log(day);

var dayOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log("Today is: " + dayOfWeek[day]);

console.log("====================================\n");


var hour = today.getHours();
console.log('hour ' + hour);

var minute = today.getMinutes();
console.log('minutes ' + minute);

var second = today.getSeconds();
console.log('seconds ' + second);

var prepand = (hour >= 12) ? 'PM' : 'AM';

hour = (hour >= 12) ? hour - 12: hour;

if(hour === 0 && prepand === 'PM') {
  if(minute === 0 && second === 0) {
    hour = 12;
    prepand = 'noon';
  } else {
  hour = 12;
  prepand = 'PM';
  }
}

if (hour === 0 && prepand === 'AM') {
  if(minute === 0 && second === 0) {
    hour = 12;
    prepand = 'Midnight';
  } else {
  hour = 12;
  prepand = 'AM';
  }
}

console.log("Current time is : " + hour + prepand + " : " + minute + ":" + second);