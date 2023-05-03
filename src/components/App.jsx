import { Route, Routes } from 'react-router-dom';
import Notiflix from 'notiflix';

import { useState } from 'react';
import Home from 'pages/Home/Home';
import MovieInfo from 'pages/MovieInfo/MovieInfo';
import SearchMovies from 'pages/Movies/Movies';
import { Layout } from './Layout/Layout';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

export const App = () => {
  const [searchQuerry, setSearchQuerry] = useState('');

  const handleSubmit = searchWord => {
    console.log('submit form');
    if (searchWord === searchQuerry) {
      return Notiflix.Notify.warning('Try another word to find');
    }
    // setSearchQuerry(searchWord.toLowerCase().trim());
    // setPage(1);
    // setImages([]);
    // setShowButton(false);
    // setIsLoading(true);
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="movies"
          element={<SearchMovies handlerSubmit={handleSubmit} />}
        />
        <Route path="movies/:movieId" element={<MovieInfo />}>
          {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
