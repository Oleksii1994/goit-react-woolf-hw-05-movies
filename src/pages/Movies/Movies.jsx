import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { fetchMoviesBySearchWord } from 'api/api';
import { normalizedMovies } from 'helpers/helpers';
import { SearchBarHeader } from './Movies.styled';
import { SearchFormMovies } from 'components/SearchForm/SearchFormMovies';

const Movies = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryFromParams = searchParams.get('query');

  useEffect(() => {
    if (searchQueryFromParams === null) {
      return;
    }

    try {
      const getFilteredMovies = async () => {
        const {
          data: { results },
        } = await fetchMoviesBySearchWord(searchQueryFromParams);

        if (!results.length) {
          Notiflix.Notify.warning(
            'Oops there are no movies by this search, try another title'
          );
        }

        setFilteredMovies(normalizedMovies(results));
      };

      getFilteredMovies();
    } catch (e) {
      console.log(e.message);
    }
  }, [searchQueryFromParams, searchParams]);

  const onSubmit = value => {
    setSearchParams({ query: value.toLowerCase().trim() });
  };

  return (
    <div>
      <SearchBarHeader>
        <SearchFormMovies onSubmit={onSubmit} />
      </SearchBarHeader>

      {filteredMovies.length > 0 && <MoviesList movies={filteredMovies} />}
    </div>
  );
};

export default Movies;
