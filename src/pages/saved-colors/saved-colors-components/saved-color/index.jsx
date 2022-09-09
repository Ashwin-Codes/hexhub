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
            if (!toast.isActive('delete')) {
              toast('Color Deleted', {
                toastId: 'delete',
              });
            }
          }}
        />
        <Copy
          className="single-saved-color-overlay-copy"
          data-clipboard-text={color}
          onClick={() => {
            if (!toast.isActive('copy')) {
              toast('Hex Copied', {
                toastId: 'copy',
              });
            }
          }}
        />
      </div>
    </div>
  );
}
