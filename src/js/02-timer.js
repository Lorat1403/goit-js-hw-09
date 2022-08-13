import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const refs = {
  days: document.querySelector(`span[data-days]`),
  hours: document.querySelector(`span[data-hours]`),
  minutes: document.querySelector(`span[data-minutes]`),
  seconds: document.querySelector(`span[data-seconds]`),
};

let startTime = new Date();
let chosenTime;
startBtn.addEventListener('click', onTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: startTime,
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= startTime.getTime()) {
      Notify.failure('Please choose a date in the future');
    }
    startBtn.disabled = false;
    console.log(selectedDates[0]);
    return (chosenTime = selectedDates[0].getTime());
  },
};

flatpickr('#datetime-picker', options);
let intervalId = null;

function onTimer() {
  startBtn.disabled = true;

  intervalId = setInterval(() => {
    const time = Date.now();
    const delta = chosenTime - time;
    if (delta <= 0) {
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(delta);
    refs.days.textContent = String(days);
    refs.hours.textContent = String(hours);
    refs.minutes.textContent = String(minutes);
    refs.seconds.textContent = String(seconds);
  }, 1000);
  stopOnTimer();
}

function stopOnTimer() {
  if (Date.parse(input.value) <= 0) {
    clearInterval(intervalId);
    startBtn.disabled = false;
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
