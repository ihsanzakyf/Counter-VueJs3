const contValue = document.getElementById('value');
const countDecrease = document.getElementById('decrease');
const countIncrease = document.getElementById('increase');

let count = 0;
contValue.textContent = count;

countIncrease.addEventListener('click', () => {
  count++;
  contValue.textContent = count;
});

countDecrease.addEventListener('click', () => {
  count--;
  contValue.textContent = count;
});
