const btn = document.querySelector('.btn__container');
const result = document.querySelector('.result');
let firstNumber = '';
let secondNumber = '';
let operator = '';

function initialize() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
}
btn.addEventListener('click', (e) => {
  if (operator === '' && e.target.className === 'btn__number') {
    firstNumber += e.target.innerText;
    result.innerText = firstNumber;
  }
  if (e.target.className === 'btn__operator') {
    operator = e.target.innerText;
  }
  if (operator !== '' && e.target.className === 'btn__number') {
    secondNumber += e.target.innerText;
    result.innerText = secondNumber;
  }
  if (e.target.id === 'equal') {
    switch (operator) {
      case '+': {
        const plusNumber = Number(firstNumber) + Number(secondNumber);
        result.innerText = plusNumber;
        initialize();
        break;
      }
      case '-': {
        const minusNumber = Number(firstNumber) - Number(secondNumber);
        result.innerText = minusNumber;
        initialize();
        break;
      }
      case '×': {
        const mutiplyNumber = Number(firstNumber) * Number(secondNumber);
        result.innerText = mutiplyNumber;
        initialize();
        break;
      }
      case '÷': {
        const divideNumber = Number(firstNumber) / Number(secondNumber);
        result.innerText = divideNumber;
        initialize();
        break;
      }
      default:
        // statements_def
        break;
    }
  }
  if (e.target.innerText === 'AC') {
    result.innerText = '0';
    initialize();
  }
});
