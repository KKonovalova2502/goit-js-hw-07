const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const amountInput = document.querySelector('#controls > input');
const containerBox = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amountValue = amountInput.value.trim();
  const amount = Number(amountValue);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    amountInput.value = '';
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  containerBox.innerHTML = '';
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const box = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    boxes.push(box);
    size += 10;
  }

  containerBox.insertAdjacentHTML('beforeend', boxes.join(''));
}

function destroyBoxes() {
  containerBox.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
