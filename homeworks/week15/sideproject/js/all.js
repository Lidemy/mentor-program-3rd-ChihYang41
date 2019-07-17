/* eslint-env jquery */
// 變數
const qs = selector => document.querySelector(selector);
const albumId = 'BpweTGaKY1uJRog';
const formData = new FormData();

// 清除 input
function clearContent() {
  qs('.file-title').value = '';
  qs('.file-description').value = '';
  qs('.file-choose').value = '';
}

// 顯示 Images
function showImageElements(response) {
  const imgCard = `
    <div class="card col-lg-8 col-md-8 col-11 mb-4 nopadding " style="width: 18rem;">
      <img src="${response.link}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
          <h5 class="card-title">
            ${response.title}
          </h5>
          <p class="card-text">
            ${response.description}
          </p>
      </div>
    </div>
   `;
  $('.gallery-image .card-container').prepend(imgCard);
}

// GET reqeust 拿 Images
async function getImages() {
  try {
    const headers = new Headers({ Authorization: 'Client-ID c41db6a92658d5f' });
    const myInit = { method: 'GET', headers };
    const response = await fetch('https://api.imgur.com/3/album/EGCUPRG/images', myInit).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return null;
    });
    const { data } = response;

    data.forEach((value) => {
      showImageElements(value);
    });
  } catch (error) {
    alert(error);
  }
}

// POST reqeust 上傳 Images
async function uploadImage(e) {
  e.preventDefault();
  try {
    // formData 的 request body
    const fileInput = e.target.querySelector('input[type=file]');
    const imageFile = fileInput.files[0];
    const imgTitle = qs('.file-title').value;
    const imgDesc = qs('.file-description').value;
    formData.append('image', imageFile);
    formData.append('album', albumId);
    formData.append('title', imgTitle);
    formData.append('description', imgDesc);
    clearContent();

    // request headers, method, body
    const headers = new Headers({ Authorization: 'Client-ID c41db6a92658d5f' });
    const myInit = { method: 'POST', headers, body: formData };
    const response = await fetch('https://api.imgur.com/3/image', myInit).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return null;
    });

    showImageElements(response.data);
  } catch (error) {
    alert(error);
  }
}

getImages();
qs('.image-upload-form').addEventListener('submit', uploadImage);
