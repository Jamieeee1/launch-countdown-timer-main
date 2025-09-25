const daySpan = document.querySelector(".day");
const hourSpan = document.querySelector(".hour");
const minuteSpan = document.querySelector(".minute");
const secondSpan = document.querySelector(".seconds");

let days = 14;
let hour = 0;
let minute = 0;
let second = 0;

const timer = setInterval(() => {
  secondSpan.innerHTML = second;
  minuteSpan.innerHTML = minute;
  hourSpan.innerHTML = hour;
  daySpan.innerHTML = days;
  countDown();
}, 1000);

const countDown = () => {
  if (second === 0 && (minute || hour || days)) {
    second = 59;
    secondSpan.innerHTML = second;
    if (minute === 0 && (hour || days)) {
      minute = 59;
      minuteSpan.innerHTML = minute;
      if (hour === 0 && days) {
        hour = 23;
        hourSpan.innerHTML = hour;
        if (days >= 1) {
          days -= 1;
          daySpan.innerHTML = days;
        }
      } else {
        if (hour >= 1) {
          hour -= 1;
          hourSpan.innerHTML = hour;
        }
      }
    } else {
      if (minute >= 1) {
        minute -= 1;
        minuteSpan.innerHTML = minute;
      }
    }
  } else {
    if (second === 0) {
      clearInterval(timer);
    } else {
      second -= 1;
      secondSpan.innerHTML = second;
    }
  }
};
