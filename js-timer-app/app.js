const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


// let futureDate = new Date(2022, 4, 19, 11, 12, 0);
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
const formatMinutes = (item) => {
  if (item < 10) {
    return item = `0${item}`;
  }
  return item
}
minutes = formatMinutes(minutes);
// day
const date = futureDate.getDate();
let month = futureDate.getMonth();
month = months[month];

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;


function getRemainingTime() {
  // future time in ms
  const futureTime = futureDate.getTime();

  // current time
  const todayTime = new Date().getTime();

  const time = futureTime - todayTime;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = Math.floor(time / oneDay);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);

  const format = (item) => {
    if (item < 10) {
      return item = `0${item}`;
    }
    return item
  }
  // set values array;
  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.textContent = format(values[index]);
  });

  if (time < 0) {
    clearInterval(countdown);
    deadline.innerHTML = ` <h3 class='expired'>sorry, this giveaway has been expired</h3>`

  }
};
let countdown = setInterval(getRemainingTime, 1000)
// getRemainingTime();

