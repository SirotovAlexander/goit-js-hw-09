const bodyQwery = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStart);

function onStart(event) {
  startBtn.disabled = true;
  setInterval(() => {
    bodyQwery.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
