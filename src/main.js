const daySpan = document.querySelector(".day");
const hourSpan = document.querySelector(".hour");
const minuteSpan = document.querySelector(".minute");
const secondSpan = document.querySelector(".seconds");

const dayDiv = daySpan.closest(".inner-div");
const hourDiv = hourSpan.closest(".inner-div");
const minuteDiv = minuteSpan.closest(".inner-div");
const secondDiv = secondSpan.closest(".inner-div");

let days = 14;
let hour = 0;
let minute = 0;
let second = 0;

function flipCard(div) {
  div.classList.remove("flip"); // reset if already animating
  void div.offsetWidth; // force reflow
  div.classList.add("flip");
  setTimeout(() => div.classList.remove("flip"), 600);
}

const timer = setInterval(() => {
  const prev = { days, hour, minute, second };
  countDown();

  // Flip only if value changed
  if (days !== prev.days) flipCard(dayDiv);
  if (hour !== prev.hour) flipCard(hourDiv);
  if (minute !== prev.minute) flipCard(minuteDiv);
  if (second !== prev.second) flipCard(secondDiv);

  secondSpan.innerHTML = second;
  minuteSpan.innerHTML = minute;
  hourSpan.innerHTML = hour;
  daySpan.innerHTML = days;
}, 1000);

const countDown = () => {
  if (second === 0 && (minute || hour || days)) {
    second = 59;

    if (minute === 0 && (hour || days)) {
      minute = 59;

      if (hour === 0 && days) {
        hour = 23;

        if (days >= 1) {
          days -= 1;
        }
      } else {
        if (hour >= 1) {
          hour -= 1;
        }
      }
    } else {
      if (minute >= 1) {
        minute -= 1;
      }
    }
  } else {
    if (second === 0) {
      clearInterval(timer);
    } else {
      second -= 1;
    }
  }
};
