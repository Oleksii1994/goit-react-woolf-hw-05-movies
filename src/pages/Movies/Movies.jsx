import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';

import { FaSistrix } from 'react-icons/fa';
import { fetchMoviesBySearchWord } from 'api/api';
import {
  SearchBarHeader,
  SearchForm,
  SearchInput,
  SearchFormBtn,
  SearchFormBtnLabel,
  PosterImg,
} from './Movies.styled';
import {
  TrendingItem,
  TrendingGallery,
  TitleMovieThumb,
  ImgThumb,
} from '../Home/Home.styled';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryFromParams = searchParams.get('query');
  const location = useLocation();

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
        const filteredData = results.map(
          ({ id, poster_path, original_title }) => ({
            id,
            poster_path,
            original_title,
          })
        );

        setFilteredMovies(filteredData);
      };

      getFilteredMovies();
    } catch (e) {
      console.log(e.message);
    }
  }, [searchQueryFromParams, searchParams]);

  const onChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let { value } = event.target.elements.search;

    setSearchQuery(value.toLowerCase().trim());
    setSearchParams({ query: value.toLowerCase().trim() });

    if (searchQuery.trim() === '') {
      Notiflix.Notify.warning('Enter title of movie to search');
      value = '';
      return;
    }

    setSearchQuery('');
  };

  return (
    <div>
      <SearchBarHeader>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormBtn type="submit" className="button">
            <FaSistrix size="24px" fill="#ffffff" />
            <SearchFormBtnLabel className="button-label">
              Search
            </SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchInput
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={onChange}
          />
        </SearchForm>
      </SearchBarHeader>

      {filteredMovies && (
        <TrendingGallery>
          {filteredMovies.map(({ id, poster_path, original_title }) => {
            return (
              <TrendingItem key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <ImgThumb>
                    <PosterImg
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                          : `https://media.istockphoto.com/id/147273331/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D1%94-%D0%B2%D1%96%D0%B4%D1%80%D0%BE-%D0%BF%D0%BE%D0%BF%D0%BA%D0%BE%D1%80%D0%BD%D1%83.jpg?s=2048x2048&w=is&k=20&c=EVEpgBCnZmkrieihX5eDgsssBgcGyU71woNkj5N4FiM=`
                      }
                      alt={original_title}
                      width="352"
                      height="528"
                    />
                  </ImgThumb>
                  <TitleMovieThumb>
                    <h2>{original_title}</h2>
                  </TitleMovieThumb>
                </Link>
              </TrendingItem>
            );
          })}
        </TrendingGallery>
      )}
    </div>
  );
};

export default Movies;
