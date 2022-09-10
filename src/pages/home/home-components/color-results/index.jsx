import React, { useEffect } from 'react';

// Css
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

// Libraries
import ClipboardJS from 'clipboard';
import { toast } from 'react-toastify';

export default function index({ colorPallete }) {
  useEffect(() => {
    const clip = new ClipboardJS('.colors-results-pallete-hex');
    if (!toast.isActive('UX info')) {
      toast('Click on color to copy hex', {
        toastId: 'UX info',
      });
    }
    return () => {
      clip.destroy();
    };
  }, []);

  if (colorPallete.length <= 0) {
    return <h1 className="no-results-found">No Results found 🤨</h1>;
  }

  return (
    <div className="color-results-container">
      <div className="color-results">
        {colorPallete.map((pallete) => {
          return (
            <div className="colors-results-pallete" key={pallete.imgUrl}>
              <div className="colors-results-pallete-img-container">
                <img
                  src={pallete.imgUrl}
                  alt="pallete-img"
                  className="colors-results-pallete-img"
                />
              </div>
              <div className="colors-results-pallete-hex-container">
                {pallete.hex.map((hex) => {
                  return (
                    <div
                      key={`${hex}+${Math.floor(Math.random() * 10)}`}
                      onClick={() => {
                        if (!toast.isActive('copy')) {
                          toast('Hex Copied', {
                            toastId: 'copy',
                          });
                        }
                      }}
                      onKeyUp={() => {}}
                      data-clipboard-text={hex}
                      className="colors-results-pallete-hex"
                      style={{ backgroundColor: hex }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
