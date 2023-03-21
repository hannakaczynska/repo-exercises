const input = document.querySelector('.input');
const output = document.querySelector('.output');

input.addEventListener('input', firstLetterToUpperCase);

function firstLetterToUpperCase() {
  let text = input.value;
  let textOnPart = text.split(' ');
  let upperArray = [];
  upperArray = textOnPart.map(
    part => part[0].toUpperCase() + part.slice(1)
  );
  let upperText = upperArray.join(' ');
  output.innerText = upperText;
}

//Error occur when space key is clicked
//Read space key as undefined
