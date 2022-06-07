import React, { useEffect } from 'react';

// Css
import './index.css';

// Libraries
import chroma from 'chroma-js';
import ClipboardJS from 'clipboard';

// Components
import LongColorBox from '../colorBox/LongColorBox';
import ShortColorBox from '../colorBox/ShortColorBox';

export default function index({ forwardRef = null }) {
  useEffect(() => {
    const clip = new ClipboardJS('.quad-colors-overlay-copy');
    return () => {
      clip.destroy();
    };
  }, []);

  return (
    <div className="quad-colors" ref={forwardRef}>
      <div className="quad-colors-first">
        <LongColorBox clr={chroma.random()} />
        <ShortColorBox clr={chroma.random()} />
      </div>
      <div className="quad-colors-second">
        <ShortColorBox clr={chroma.random()} />
        <LongColorBox clr={chroma.random()} />
      </div>
    </div>
  );
}
