const qs = selector => document.querySelector(selector);

// 宣告變數
let offset = 0;
let gameName = 'League%20of%20Legends';

class Request {
  constructor() {
    this.clientId = 'z97jvca5asox81v22jbb24eziykct5';
  }

  getPopularGames() {
    const url = 'https://api.twitch.tv/kraken/games/top?limit=5';
    const headers = new Headers({ 'Client-Id': this.clientId });
    const myInit = { headers };
    return fetch(url, myInit).then((res) => {
      if (res.ok) {
        return res.json();
      }
      alert('錯誤，請重新整理');
      return null;
    });
  }

  getLiveStreams() {
    const url = 'https://api.twitch.tv/kraken/streams/';
    const headers = new Headers({ 'Client-Id': this.clientId });
    const myInit = { headers };
    return fetch(`${url}?game=${gameName}&limit=20&offset=${offset}`, myInit).then((res) => {
      if (res.ok) {
        return res.json();
      }
      alert('錯誤，請重新整理');
      return null;
    });
  }
}

const getRequest = new Request();

// 把前五熱門遊戲渲染到 nav bar 上
function showNavbarTop5Games(response) {
  const gameList = qs('.game__list');
  for (let i = 0; i < 5; i += 1) {
    const li = document.querySelector('li');
    li.innerHTML = `${response.top[i].game.name}`;
    gameList.appendChild(li);
  }
}

// 渲染畫面的 function
function renderStreamCards(response) {
  const container = qs('main');
  for (let i = 0; i < 20; i += 1) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('stream__card');
    cardContainer.innerHTML = `
      <a href="${response.streams[i].channel.url}" target="_blank"> 
        <img src="${response.streams[i].preview.medium}" class="stream__img">
        <div class="stream__info">
          <img src="${response.streams[i].channel.logo}" class="stream__avatar">
          <div class="stream__name text__overflow">
            <div class="text__overflow">${response.streams[i].channel.status}</div>
            <div>${response.streams[i].channel.display_name}</div>
          </div>
        </div>
      </a>
    `;
    container.appendChild(cardContainer);
  }
}

// 非同步 function 取得前五熱門遊戲
async function getTop5Games() {
  try {
    const response = await getRequest.getPopularGames();
    showNavbarTop5Games(response);
  } catch (error) {
    console.log(`錯誤，請重新整理 ${error}`);
  }
}

// 從 API 取得前 20 名最熱門直播，取得資料後渲染到畫面上
async function getTop20Streams() {
  try {
    const response = await getRequest.getLiveStreams();
    renderStreamCards(response);
  } catch (error) {
    alert(`錯誤，請重新整理 ${error}`);
  }
}

// 點擊按鈕顯示更多遊戲直播
qs('.btn').addEventListener('click', () => {
  offset += 20;
  getTop20Streams();
});

// 點擊 nav bar 遊戲名字，可以切換熱門直播
qs('.game__list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    offset = 0;
    qs('main').innerHTML = '';
    qs('.main__title').innerText = e.target.innerText;
    gameName = e.target.innerText.split(' ').join('%20');
    getTop20Streams();
  }
});

// 執行顯示前五熱門遊戲跟顯示熱門直播的async function
getTop5Games();
getTop20Streams();
