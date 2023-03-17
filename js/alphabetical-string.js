const input = document.querySelector('.input');
const output = document.querySelector('.output');

input.addEventListener('blur', stringInAlphabeticalOrder);

function stringInAlphabeticalOrder() {
  let alphabeticalString = input.value.split('').sort().join('');
  output.innerText = alphabeticalString;
}
