//Reverse string input and show in output

const input = document.querySelector('.input');
const output = document.querySelector('.output');

let outputText = output.innerHTML;

function reverseInputText() {
  let reversedText = input.value.split('').reverse().join('');
  output.innerText = reversedText;
}

input.addEventListener('change', reverseInputText);
