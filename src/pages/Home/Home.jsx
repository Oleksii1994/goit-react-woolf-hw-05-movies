import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import { fetchTrendingMoviesData } from 'api/api';

import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const {
          data: { results },
        } = await fetchTrendingMoviesData();

        const filteredData = results.map(({ id, poster_path, title }) => ({
          id,
          poster_path,
          title,
        }));

        setPopularMovies(filteredData);
      };
      getTrendingMovies();
    } catch (e) {
      console.log(e.message);
      Notify.error('Oops, something went wrong, try to reload the page');
    }
  }, []);

  return <MoviesList movies={popularMovies} />;
};

export default Home;
