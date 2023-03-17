const input = document.querySelector('.input');
const noPalindromeText = document.querySelector('#no');
const yesPalindromeText = document.querySelector('#yes');

function isPalindrome() {
  let reverseInput = input.value.split('').reverse().join('');
  if (input.value === '') {
    yesPalindromeText.classList.add('hidden');
    noPalindromeText.classList.add('hidden');
  } else if (input.value === reverseInput) {
    yesPalindromeText.classList.remove('hidden');
    noPalindromeText.classList.add('hidden');
    console.log(reverseInput);
  } else {
    noPalindromeText.classList.remove('hidden');
    yesPalindromeText.classList.add('hidden');
  }
}

input.addEventListener('blur', isPalindrome);
