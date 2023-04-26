// Quwey
const bodyQwery = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

bodyQwery.addEventListener('click', onClick);

let intervalId = null;

function onClick(event) {
  if (event.target === startBtn) {
    startBtn.disabled = true;
    intervalId = setInterval(() => {
      bodyQwery.style.backgroundColor = getRandomHexColor();
    }, 1000);
  } else if (event.target === stopBtn) {
    startBtn.disabled = false;
    clearInterval(intervalId);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}