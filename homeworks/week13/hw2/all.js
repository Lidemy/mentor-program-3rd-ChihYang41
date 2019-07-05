/* eslint-env jquery */
$(document).ready(() => {
  $('.todo-input-button').click(() => {
    const content = `
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<p>${$('.todo-input-text').val()}</p>
        		<div class="button-container">
        			<button class="todo-delete btn btn-dark">刪除</button>
        			<button class="todo-complete btn btn-dark">完成</button>
        		</div>
			</li>
		`;
    $('.list-group').append(content);
    $('.todo-input-text').val('');
  });

  $('.list-group').click((e) => {
    const target = $(e.target);
    if (target.hasClass('todo-delete')) {
      target.parent().parent().remove();
    } else if (target.hasClass('todo-complete')) {
      target.parent().parent().toggleClass('list-group-item-success');
    }
  });
});
