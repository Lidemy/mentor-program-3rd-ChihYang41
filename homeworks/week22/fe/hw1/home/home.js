import React, { useState } from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import './home.css';

function VideoToggle() {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        來首歌好嗎？
      </Button>
      <Fade in={open}>
        <div style={{ width: 660, height: 'auto' }} className="home-page-video">
          <ResponsiveEmbed aspect="a16by9" aspectRatio="16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0dxP6oEuNHM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </ResponsiveEmbed>
        </div>
      </Fade>
    </React.Fragment>
  );
}

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
