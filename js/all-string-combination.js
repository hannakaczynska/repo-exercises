const input = document.querySelector('.input');
const combinationList = document.querySelector('.combinations');

input.addEventListener('blur', showStringCombination);

function showStringCombination(string) {
  string = input.value;
  let array = [];
  array = input.value.split('');
  let combinationArray = [];
  let combination = '';
  const iterationNumber = Math.pow(2, array.length);

  for (let i = 0; i < iterationNumber; i++) {
    combination = '';
    for (let j = 0; j < array.length; j++) {
      if (i & Math.pow(2, j)) {
        combination += array[j];
      }
    }
    if (combination !== '') {
      combinationArray.push(combination);
    }
  }
  const allCombinations = combinationArray.join('\n');
  combinationList.innerText = allCombinations;
}
