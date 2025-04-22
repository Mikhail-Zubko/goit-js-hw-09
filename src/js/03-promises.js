import 'notiflix/dist/notiflix-3.2.5.min.css';
import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', onStart)

function onStart(e) {
  e.preventDefault()
  const delay = Number(e.currentTarget.elements.delay.value)
  const step = Number(e.currentTarget.elements.step.value)
  const amount = Number(e.currentTarget.elements.amount.value)

  listOfDelay(delay, step, amount)
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
