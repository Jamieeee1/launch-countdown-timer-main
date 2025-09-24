const daySpan = document.querySelector(".day");
const hourSpan = document.querySelector(".hour");
const minuteSpan = document.querySelector(".minute");
const secondSpan = document.querySelector(".second");

let days = 14;
let hour = 0;
let minute = 0;
let second = 0;

setInterval(() => {
  countDown();
}, 1000);

const countDown = () => {};
