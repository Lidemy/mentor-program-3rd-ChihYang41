/* eslint-env jquery */
$(document).ready(() => {
  // 取得現在時間
  function getTime() {
    const timeNow = new Date();
    const year = timeNow.getFullYear();
    const month = (timeNow.getMonth() + 1 < 10 ? '0' : '') + (timeNow.getMonth() + 1);
    const day = (timeNow.getDay() < 10 ? '0' : '') + timeNow.getDay();
    const hour = (timeNow.getHours() < 10 ? '0' : '') + timeNow.getHours();
    const minute = (timeNow.getMinutes() < 10 ? '0' : '') + timeNow.getMinutes();
    const second = (timeNow.getSeconds() < 10 ? '0' : '') + timeNow.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  // 創造主留言元素
  function createMainComments(content, nickname, id) {
    const mainComment = `
      <div class="board__commment">
        <div class="board__commment-header">
          <div class="board__commment-nickname">
            ${nickname}
          </div>
          <div class="board__commment-time">
            ${getTime()}
          </div>
        </div>

        <div class="board__commment-content">
          ${content}
          <div class="subcomment-container">
          </div>
          <form class="board__reply" method="POST" action="./handle_add_comments.php">
            <input type="hidden" name="parent_id" value="${id}">
            <textarea placeholder="想說什麼勒？" name="content" rows="5" ></textarea>
            <input type="submit" value="送出" class="board__post-submit">
          </form>
        </div>
        <div class="board__btn">
          <button class="btn__delete" data-value="${id}">刪除</button>
          <a href="./update_comments.php?id=${id}"><button class="btn__edit">編輯</button></a>
        </div>
      </div>
    `;
    return $('.board__commments').prepend(mainComment);
  }

  // 創造子留言
  function createSubComments(content, nickname, id) {
    const subComment = `
      <div class="board__subcomment-single">
        <div class="board__subcomment-header">
          <div class="board__subcomment-nickname">
            ${nickname}
          </div>
          <div class="board__subcomment-time">
            ${getTime()}
          </div>
        </div>

        <div class="board__subcomment-content">
          ${content}
          <div class="board__btn sub-btn" >
            <button class="btn__delete" data-value="${id}">刪除</button>
            <a href="./update_comments.php?id=${id}"><button>編輯</button></a>
          </div>
        </div>
      </div>  
    `;
    return subComment;
  }

  // 刪除留言
  function deleteComments(e) {
    const id = $(e.target).attr('data-value');
    $.ajax({
      method: 'POST',
      url: './handle_delete_comments.php',
      data: { id },
    }).done(() => {
      const deleteTarget = $(e.target).closest('.board__subcomment-single');
      if (deleteTarget.length === 1) {
        deleteTarget.fadeOut(300);
      } else {
        $(e.target).closest('.board__commment').fadeOut(300);
      }
    }).fail((msg) => {
      alert(msg);
    });
  }

  // 新增留言
  function addComments(e) {
    e.preventDefault();
    const content = $(e.target).parent().find('textarea[name="content"]').val();
    const parentId = $(e.target).parent().find('input[name="parent_id"]').val();
    const subComment = $(e.target).parent().parent().find('.subcomment-container');
    const getAuthor = $(e.target).parent().parent().parent()
      .find('.board__commment-nickname')[0].innerText;
    $.ajax({
      method: 'POST',
      url: './handle_add_comments.php',
      data: { content, parentId },
    }).done((msg) => {
      const response = JSON.parse(msg);
      if (parentId === '0') {
        $('.board__post-textarea textarea').val('');
        createMainComments(content, response.nickname, response.id);
      } else {
        // 判斷子留言是不是原 PO
        if (getAuthor === response.nickname) {
          $('.board__reply textarea').val('');
          subComment.append(createSubComments(content, response.nickname, response.id));
          subComment.find('.board__subcomment-single').addClass('board__subcomment-main');
        }
        $('.board__reply textarea').val('');
        subComment.append(createSubComments(content, response.nickname, response.id));
      }
    }).fail((msg) => {
      alert(msg);
    });
  }

  $('.board__commments').on('click', '.btn__delete', deleteComments);
  $('body').on('click', '.board__post-submit', addComments);
});
