const qs = selector => document.querySelector(selector);
const url = 'https://lidemy-book-store.herokuapp.com/posts';
const commentList = qs('.comment__list');
const commentTextarea = qs('.comment__textarea');
const btn = qs('.comment__board-btn');

// 創造留言的元素
function createComments(value) {
  const li = document.createElement('li');
  li.innerText = `${value.id} ： ${value.content}`;
  commentList.appendChild(li);
}

// 渲染最新 20 則留言
async function showComment() {
  try {
    commentList.innerHTML = '';
    const response = await fetch(`${url}?_limit=20&_sort=id&_order=desc`).then((res) => {
      if (res.ok) {
        return res.json();
      }
      alert('發生錯誤，請重新整理');
      return null;
    });

    response.forEach((value) => {
      createComments(value);
    });
  } catch (error) {
    alert(`錯誤：${error}`);
  }
}

// 新增留言
async function postComment() {
  try {
    const headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded' });
    const body = `id&content=${commentTextarea.value}`;
    const myInit = { method: 'POST', headers, body };

    const response = await fetch(`${url}`, myInit);
    if (response.ok) {
      showComment();
      commentTextarea.value = '';
    }
    alert('發生錯誤，請重新整理');
  } catch (error) {
    alert(`錯誤：${error}`);
  }
}

btn.addEventListener('click', postComment);

showComment();
