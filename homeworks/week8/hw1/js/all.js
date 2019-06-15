const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const lotteryTitle = document.querySelector('.title');
const lotteryImage = document.querySelector('.lottery__image');

class Prize {
  constructor(title, imgUrl, bgClass) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.bgColorClass = bgClass;
  }

  getFirstPrize() {
    this.title = '恭喜你中頭獎了！日本東京來回雙人遊！';
    this.imgUrl = 'http://pixelartmaker.com/art/cec844662085081.png';
    this.bgColorClass = 'first__prize__background';
    this.showPrizeResult();
  }

  getSecondPrize() {
    this.title = '二獎！90 吋電視一台！';
    this.imgUrl = 'https://cdn4.iconfinder.com/data/icons/random-8-bit-pixel/512/tv-512.png';
    this.bgColorClass = 'second__prize__background';
    this.showPrizeResult();
  }

  getThirdPrize() {
    this.title = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
    this.imgUrl = 'http://pixelartmaker.com/art/ab3778dba76ba4f.png';
    this.bgColorClass = 'third__prize__background';
    this.showPrizeResult();
  }

  getNone() {
    this.title = '銘謝惠顧';
    this.imgUrl = '';
    this.bgColorClass = 'none__prize__background';
    lotteryImage.classList.add('hidden');
    this.showPrizeResult();
  }

  showPrizeResult() {
    lotteryTitle.innerText = this.title;
    lotteryImage.src = this.imgUrl;
    body.classList.add(this.bgColorClass);
  }
}

// 初始化背景顏色
function initializeBackground() {
  body.classList.add('bg_initialize');
  body.className = '';
}

// 渲染抽獎結果到畫面上
function showLotteryResult(prize) {
  const prizeResult = new Prize();
  lotteryImage.classList.remove('hidden');
  initializeBackground();
  switch (prize) {
    case 'FIRST':
      prizeResult.getFirstPrize();
      break;
    case 'SECOND':
      prizeResult.getSecondPrize();
      break;
    case 'THIRD':
      prizeResult.getThirdPrize();
      break;
    case 'NONE':
      prizeResult.getNone();
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
