import React from 'react';
import './home.css';
import VideoToggle from './VideoToggle';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>E 世代最ㄅㄧㄤˋ的事情，就是到戰略高手上奇摩家族，一邊用即時通把妹，或是帶著最新的哈電族跟同一掛的麻吉去西門町壓馬路。</p>
      <p>如果有人看不懂，哇哩咧，你們就真的是LKK了。</p>
      <VideoToggle />
    </div>
  );
}

export default Home;
