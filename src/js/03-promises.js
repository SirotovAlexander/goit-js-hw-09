function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
const submitBtn = document.querySelector('button[type="submit"]');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let position = 0;
  let DELAY = 0;
  for (let i = 0; i < form.amount.value; i += 1) {
    submitBtn.disabled = true;
    position += 1;
    DELAY = Number(form.delay.value) + form.step.value * i;
    createPromise(position, DELAY)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
