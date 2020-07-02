import {useEffect, useState} from 'react';

import fetch from 'isomorphic-fetch';
const token = 'LxxnGmngRmOMt3UWBLFO-6u7WOjKY0_YqM2rKLX9PLA';
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const url = `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Client-ID ${token}`,
        },
      });
      const jsonify = await response.json();
      setResults(jsonify.results);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    searchApi('job');
  }, []);
  return [searchApi, results, errorMessage];
};
