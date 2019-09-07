import React, { useState } from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

export default function VideoToggle() {
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
