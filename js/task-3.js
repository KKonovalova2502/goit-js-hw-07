const textInput = document.getElementById('name-input');
const textOutput = document.getElementById('name-output');

textInput.addEventListener('input', event => {
  const clearText = event.target.value.trim();
  if (clearText) {
    textOutput.textContent = clearText;
  } else {
    textOutput.textContent = 'Anonymous';
  }
});
