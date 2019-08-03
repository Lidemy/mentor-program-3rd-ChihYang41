/* eslint-env jquery */
/* eslint-disable */
$(document).ready(() => {
  let list = [];

  // 渲染
  function render() {
    $('.todo-list').empty();
    $('.todo-list').append(list.map((item) => `
      <li class="list-group-item d-flex justify-content-between align-items-center ${item.isCompleted ? 'list-group-item-success' : ''}" dataId="${item.dataId}">
        <p>${item.content}</p>
        <div class="button-container">
          <button class="todo-delete btn btn-dark">刪除</button>
          <button class="todo-complete btn btn-dark">完成</button>
        </div>
      </li>  
    `));
  }

  // 新增事項
  function addTodo(content) {
    list.push({ dataId: Math.random().toString(36).substr(2, 9), content, isCompleted: false });
    $('.todo-input-text').val('');
    render();
  }

  // 刪除事項
  function removeTodo(id) {
    list = list.filter((item) => item.dataId !== id);
    render();
  }

  // 完成事項
  function todoCompleted(id) {
    list.forEach((item, index) => {
      if (item.dataId === id) {
        list[index].isCompleted = !list[index].isCompleted;
      }
    });
    render();
  }

  // EventListener
  $('.list-group').click((e) => {
    const target = $(e.target);
    if (target.hasClass('todo-delete')) {
      // 抓 target id
      const id = target.parent().parent().attr('dataId');
      removeTodo(id);
    } else if (target.hasClass('todo-complete')) {
      // 抓 target id
      const id = target.parent().parent().attr('dataId');
      todoCompleted(id);
    } else if (target.hasClass('todo-input-button')) {
      const content = $('.todo-input-text').val();
      addTodo(content);
    }
  });
});
