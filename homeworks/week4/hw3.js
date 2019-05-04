const request = require('request');
const process = require('process');

const method = process.argv[2];
const id = process.argv[3];
const bookName = process.argv[4];

switch (method) {
  case 'delete':
    request.delete(
      `https://lidemy-book-store.herokuapp.com/books/${id}`,
      () => {
        console.log(`成功刪除 id 為 ${id} 的書籍`);
      },
    );
    break;

  case 'list':
    request(
      'https://lidemy-book-store.herokuapp.com/books?_limit=20',
      (error, response, body) => {
        const obj = JSON.parse(body);
        obj.forEach((value) => {
          console.log(`${value.id} ${value.name}`);
        });
      },
    );
    break;

  case 'read':
    request(
      `https://lidemy-book-store.herokuapp.com/books/${id}`,
      (error, response, body) => {
        const obj = JSON.parse(body);
        console.log(obj.name);
      },
    );
    break;

  case 'create':
    request.post(
      {
        url: 'https://lidemy-book-store.herokuapp.com/books',
        form: {
          id: '',
          name: process.argv[3],
        },
      },
      () => {
        console.log(`新增了名為 ${process.argv[3]} 的書`);
      },
    );
    break;

  case 'update':
    request.patch(
      {
        url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
        form: {
          name: bookName,
        },
      },
      () => {
        console.log(`更改了 id 為 ${id} 的書名為 ${bookName}`);
      },
    );
    break;

  default:
    console.log('請輸入正確的指令');
    break;
}
