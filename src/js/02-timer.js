import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hour = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');

      return;
    }
  },
};

flatpickr(input, options);

startBtn.addEventListener('click', onClick);

function onClick(event) {
  startBtn.disabled = true;
  setInterval(() => {
    const targetDate = new Date(input.value);
    const timer = targetDate - Date.now();
    const convertTimer = convertMs(timer);
    days.textContent = convertTimer.days.toString().padStart(2, '0');
    hour.textContent = convertTimer.hours.toString().padStart(2, '0');
    minutes.textContent = convertTimer.minutes.toString().padStart(2, '0');
    seconds.textContent = convertTimer.seconds.toString().padStart(2, '0');
    console.log(convertTimer);
  }, 1000);
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
