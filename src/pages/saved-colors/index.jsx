import React, { useState, useEffect } from 'react';

// Css
import './index.css';

// Library
import ClipboardJS from 'clipboard';

// Hooks
import useLocalStorage from '../../hooks/useLocalStorage';

// Components
import SavedColor from './saved-colors-components/saved-color';

export default function index() {
  const [savedColors, setSavedColors] = useState([]);
  const { getItem, setItem, searchItem } = useLocalStorage();

  useEffect(() => {
    if (searchItem('liked__colors')) {
      const colors = getItem('liked__colors');
      setSavedColors(colors);
    }
  }, []);

  // Initialise ClipboardJS
  useEffect(() => {
    const clip = new ClipboardJS('.single-saved-color-overlay-copy');
    return () => {
      clip.destroy();
    };
  }, []);

  function heartClickHandler(ele) {
    const allColors = getItem('liked__colors');
    const updatedColorsArr = allColors.filter((item) => !(item === ele));
    setItem('liked__colors', JSON.stringify(updatedColorsArr));

    setSavedColors(updatedColorsArr);
  }

  return (
    <>
      <h1 className="saved-colors-container-heading">Saved</h1>
      <div className="saved-colors-container">
        {savedColors.map((ele) => {
          return (
            <SavedColor
              color={ele}
              key={ele}
              heartOnClick={heartClickHandler.bind(this, ele)}
            />
          );
        })}
        {savedColors.length < 1 && (
          <h1 className="saved-colors-no-file">You liked no colors 😐</h1>
        )}
      </div>
    </>
  );
}
