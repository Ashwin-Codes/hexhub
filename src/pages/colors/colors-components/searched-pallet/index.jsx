import React, { useEffect } from 'react';

// Css
import './index.css';

// Libraries
import chroma from 'chroma-js';
import ClipboardJS from 'clipboard';

// Components
import LongColorBox from '../colorBox/LongColorBox';

export default function index({ color }) {
  const clr = chroma(color);
  const brighten = [];
  const darken = [];

  for (let i = 0; i < 5; i++) {
    brighten.push(chroma(clr).brighten(i * 0.5));
    darken.push(chroma(clr).darken(i * 0.5));
  }

  // Clipboardjs init
  useEffect(() => {
    const clip = new ClipboardJS('.quad-colors-overlay-copy');
    return () => {
      clip.destroy();
    };
  }, []);

  return (
    <div className="searched-color-pallet-container">
      <h1 className="searched-color-pallet-container-headings">Bright</h1>

      {brighten.map((ele) => {
        return <LongColorBox clr={ele} key={ele.hex()} />;
      })}

      <h1 className="searched-color-pallet-container-headings">Dark</h1>

      {darken.map((ele) => {
        return <LongColorBox clr={ele} key={ele.hex()} />;
      })}
    </div>
  );
}
