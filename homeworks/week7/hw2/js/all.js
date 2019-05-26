const inputRequired = document.querySelectorAll('.input__required');
const radioRequired = document.querySelectorAll('.input__radio');
const submitForm = document.querySelector('.main__form');

// 新增提醒
function addReminder(node) {
  const target = node;
  target.closest('.container__required').style.background = '#ffd6d6';
  target.style.borderBottom = '2px solid #ea3535';
  const reminder = document.createElement('div');
  reminder.classList.add('reminder');
  reminder.classList.add('text__red');
  reminder.innerText = '這是必填問題';
  target.closest('.container__required').appendChild(reminder);
}

// 移除提醒
function removeReminder(node) {
  const target = node;
  target.closest('.container__required').style.background = '';
  target.style.borderBottom = '2px solid #E3E3E3';
  target.closest('.container__required').removeChild(target.closest('.container__required').childNodes[3]);
}

// 焦點離開必填欄位的話會冒出提醒
for (let i = 0; i < inputRequired.length; i += 1) {
  // 提醒自己： this 在監聽事件中指向該 DOM
  inputRequired[i].addEventListener('blur', function (e) {
    const { backgroundColor } = this.closest('.container__required').style;
    if (e.target.value === '' && backgroundColor === '') {
      addReminder(this);
    } else if (e.target.value !== '' && backgroundColor === 'rgb(255, 214, 214)') {
      removeReminder(this);
    }
  });
}

// submit 表單並確認
submitForm.addEventListener('submit', (e) => {
  let finalCheck = true;
  for (let i = 0; i < inputRequired.length; i += 1) {
    if (!inputRequired[i].value) {
      if (inputRequired[i].style.borderBottomColor !== 'rgb(234, 53, 53)') {
        addReminder(inputRequired[i]);
      }
      finalCheck = false;
    }
  }
  if (finalCheck) {
    const other = document.querySelector('#other');
    alert('提交成功');
    inputRequired.forEach((element) => {
      console.log(`${element.name} : ${element.value}`);
    });
    radioRequired.forEach((element) => {
      console.log(`${element.id} : ${element.checked}`);
    });
    console.log(`other : ${other.value}`);
  } else {
    alert('提交失敗，還有欄位沒填喔');
    e.preventDefault();
  }
}, false);
