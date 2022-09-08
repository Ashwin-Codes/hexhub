import React from 'react';

// Css and icons
import './index.css';
import { AiOutlineDelete as Delete } from 'react-icons/ai';
import { VscCloudDownload as Copy } from 'react-icons/vsc';

// Library
import { toast } from 'react-toastify';

export default function index({ color, heartOnClick }) {
  return (
    <div className="single-saved-color" style={{ backgroundColor: color }}>
      <div className="single-saved-color-overlay">
        <Delete
          className="single-saved-color-overlay-delete"
          onClick={() => {
            heartOnClick();
            toast('Deleted Color ! 👍');
          }}
        />
        <Copy
          className="single-saved-color-overlay-copy"
          data-clipboard-text={color}
          onClick={() => {
            toast('Copied Hex ! 👍');
          }}
        />
      </div>
    </div>
  );
}
