import React, { useEffect, useRef } from 'react';

// Css
import './index.css';

export default function index() {
  const emojiRef = useRef();

  const emojis = ['🔮', '🤖', '☀️', '👨‍💻', '🤍', '🦾', '🚀'];

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i > emojis.length - 1) {
        i = 0;
      }
      emojiRef.current.innerText = emojis[i];
      i += 1;
    }, 100);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="backdrop">
      <div className="backdrop-modal">
        <h1 className="backdrop-modal-text">beep beep boop</h1>
        <h1 className="backdrop-modal-emoji" ref={emojiRef}>
          {emojis[0]}
        </h1>
      </div>
    </div>
  );
}
