import React, { useState, useEffect } from 'react';

// Css
import './index.css';

// Components
import SearchBar from '../../components/searchBar';
import ColorsResults from './home-components/color-results';
import LoadingModal from '../../components/loadingModal/index';

//  Hooks
import useLocalStorage from '../../hooks/useLocalStorage';

export default function home() {
  const [searchTerm, setSearchTerm] = useState('Tree');
  const [loading, setLoading] = useState(false);
  const [pallete, setPallete] = useState([]);
  const { getItem, setItem, searchItem } = useLocalStorage();

  async function getHex() {
    // Search item if exists.
    if (searchItem(searchTerm)) {
      const item = getItem(searchTerm);
      setPallete(item);
      return;
    }

    // Open loading modal
    setLoading(true);

    const body = { query: searchTerm };
    const res = await fetch('http://localhost:5000/api/queryToHex', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setPallete(data);
    setItem(searchTerm, JSON.stringify(data));
    // Close loading modal
    setLoading(false);
  }

  useEffect(() => {
    getHex();
  }, [searchTerm]);

  return (
    <div className="home">
      {loading && <LoadingModal />}
      <SearchBar searchTermHandler={setSearchTerm} placeholder="Search Term" />
      <h1 className="home-results-heading">Showing results for {searchTerm}</h1>
      <ColorsResults colorPallete={pallete} />
    </div>
  );
}
