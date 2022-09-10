import React, { useEffect, useState, useRef } from 'react';

// Css
import './index.css';

// Libraries
import chroma from 'chroma-js';

// Components
import QuadColors from './colors-components/quad-colors';
import SearchBar from '../../components/searchBar';
import SearchedPallet from './colors-components/searched-pallet';

export default function colors() {
  const [searchedColors, setSearchedColors] = useState();
  const [showSearchedPallet, setShowSearchedPallet] = useState(false);

  const [colorSets, setColorSets] = useState([
    <QuadColors key={1} />,
    <QuadColors key={2} />,
    <QuadColors key={3} />,
    <QuadColors key={4} />,
    <QuadColors key={5} />,
  ]);

  const containerRef = useRef();
  const footRef = useRef();

  // Color Search Handler
  function colorSearchHandler() {
    if (
      searchedColors === undefined ||
      searchedColors === null ||
      searchedColors === ''
    ) {
      return;
    }

    setShowSearchedPallet(true);
  }

  useEffect(() => {
    colorSearchHandler();
  }, [searchedColors]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setColorSets((prev) => [...prev, <QuadColors key={Math.random()} />]);
      }
    });

    observer.observe(footRef.current);
  }, []);

  function inputValidator(textValue) {
    if (!chroma.valid(textValue)) {
      return false;
    }
    return true;
  }

  return (
    <>
      <SearchBar
        placeholder="color or hex"
        searchTermHandler={setSearchedColors}
        validator={inputValidator}
        validatorMsg="Invalid color name 🤨"
      />
      {!showSearchedPallet && (
        <div className="random-colors-container" ref={containerRef}>
          {[colorSets]}
          <div className="random-colors-container-foot" ref={footRef} />
        </div>
      )}
      {showSearchedPallet && <SearchedPallet color={searchedColors} />}
    </>
  );
}
