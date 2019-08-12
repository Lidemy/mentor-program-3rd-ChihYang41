/* eslint-env jquery */
const url = 'http://api.chihyang41.tw/todos/';
let list;

// 撈 todo list 資料
async function getTodos() {
  try {
    const response = await fetch(url);
    const todos = await response.json();
    list = todos;
  } catch (err) {
    console.log(err);
  }
}

// 渲染
async function render() {
  await getTodos();
  $('.todo-list').empty();
  $('.todo-list').append(list.map(item => `
    <li class="list-group-item d-flex justify-content-between align-items-center ${item.isCompleted ? 'list-group-item-success' : ''}" dataId="${item.id}">
      <p>${item.content}</p>
      <input type="text">
      <div class="button-container">
        <button class="todo-delete btn btn-dark">刪除</button>
        <button class="todo-edit btn btn-dark">編輯</button>
        <button class="todo-complete btn btn-dark">完成</button>
      </div>
    </li>  
  `));
}

// 丟各種 request
async function sendRequest(id, method, content) {
  const myInit = { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(content) };
  await fetch(url + id, myInit);
}

// 新增 todos
async function addTodos() {
  try {
    const content = $('.todo-input-text').val();
    await sendRequest('', 'POST', { content });
    $('.todo-input-text').val('');
    render();
  } catch (err) {
    console.log(err);
  }
}

// 移除 todos
async function removeTodo() {
  try {
    const id = Number(this.parentNode.parentNode.getAttribute('dataId'));
    await sendRequest(id, 'DELETE');
    render();
  } catch (err) {
    console.log(err);
  }
}

// 完成 todos
async function todoCompleted() {
  try {
    let data = {};
    const id = Number(this.parentNode.parentNode.getAttribute('dataId'));
    list.forEach((item, index) => {
      if (item.id === id) {
        list[index].isCompleted = !list[index].isCompleted;
        data = { isCompleted: list[index].isCompleted };
      }
    });
    await sendRequest(id, 'PATCH', data);
    render();
  } catch (err) {
    console.log(err);
  }
}

// 編輯 todos(這裡寫超爛，但還沒想到怎改比較好 Q_Q 麻煩大力鞭)
async function editTodo() {
  try {
    const listItem = this.parentNode.parentNode;
    const id = Number(listItem.getAttribute('dataId'));
    const editInput = listItem.querySelector('input[type="text"]');
    const todoContent = listItem.querySelector('p');
    const originalContent = todoContent.innerText;
    const editMode = listItem.classList.contains('edit-mode');

    // 編輯模式
    if (editMode) {
      todoContent.innerText = editInput.value;
    } else {
      editInput.value = todoContent.innerText;
    }
    listItem.classList.toggle('edit-mode');

    // 編輯完成
    if (originalContent !== todoContent.innerText) {
      const content = todoContent.innerText;
      await sendRequest(id, 'PATCH', { content });
      render();
    }
  } catch (err) {
    console.log(err);
  }
}

// 初始渲染
render();

// EventListener
$('.todo-list').on('click', '.todo-delete', removeTodo);
$('.todo-list').on('click', '.todo-complete', todoCompleted);
$('.todo-list').on('click', '.todo-edit', editTodo);
$('.row').on('click', '.todo-input-button', addTodos);
