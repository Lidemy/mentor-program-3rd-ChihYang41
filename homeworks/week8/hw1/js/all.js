const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const lotteryTitle = document.querySelector('.title');
const lotteryImage = document.querySelector('.lottery__image');

// 初始化背景顏色
function initializeBackground() {
  body.style.backgroundColor = '#fffbbe';
  body.style.color = '#000000';
}

// 渲染抽獎結果到畫面上
function showLotteryResult(prize) {
  lotteryImage.classList.remove('hidden');
  initializeBackground();
  switch (prize) {
    case 'FIRST':
      lotteryTitle.innerText = '恭喜你中頭獎了！日本東京來回雙人遊！';
      lotteryImage.src = 'http://pixelartmaker.com/art/cec844662085081.png';
      body.classList.toggle('first__prize__background');
      break;
    case 'SECOND':
      lotteryTitle.innerText = '二獎！90 吋電視一台！';
      lotteryImage.src = 'https://cdn4.iconfinder.com/data/icons/random-8-bit-pixel/512/tv-512.png';
      break;
    case 'THIRD':
      lotteryTitle.innerText = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
      lotteryImage.src = 'http://pixelartmaker.com/art/ab3778dba76ba4f.png';
      break;
    case 'NONE':
      lotteryTitle.innerText = '銘謝惠顧';
      lotteryImage.classList.add('hidden');
      body.style.backgroundColor = '#000000';
      body.style.color = '#ffffff';
      break;
    default:
      // statements_def
      break;
  }
  btn.innerText = '再來一次！';
}

// 抽獎的非同步 function
async function lottery() {
  try {
    const response = await fetch('https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery').then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.log(`Status code : ${res.status}`);
      return null;
    });
    const data = response.prize;
    showLotteryResult(data);
  } catch (error) {
    alert('系統不穩定，請再試一次');
  }
}

// btn 的監聽事件
btn.addEventListener('click', lottery);

// 抽獎機率第一次跑完 for loop 100 次測試的結果
// first : 6%;
// second : 22%;
// third : 28%;
// none: 41%;
// error : 3%;

// 每次都不太一定，約莫跑了幾次 for loop 後
// first : 1~7%;
// second: 16~22%;
// third: 26~32%;
// nonr: 41~48%;
// error: 2~6%;
