
import './App.css';
import {useEffect, useState} from 'react';
import SearchIcon from './search-icon.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=c74201bc'

const App = () => {

  const searchMovies = async (title) => {
    const movies = await fetch(`${API_URL}&s=${title}`);
    const data = await movies.json();
    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('hunger games');
  }, []);

  return (
    <div className="app">
      <h1>MovieApp</h1>

      <div className="search">
        <input
          placeholder='Search for movies'
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default App;
