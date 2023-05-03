// import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Notiflix, { Notify } from 'notiflix';
import axios from 'axios';
import { FaSistrix } from 'react-icons/fa';
import {
  SearchBarHeader,
  SearchForm,
  SearchInput,
  SearchFormBtn,
  SearchFormBtnLabel,
} from './Movies.styled';
import {
  TrendingItem,
  TrendingGallery,
  TitleMovieThumb,
  ImgThumb,
} from '../Home/Home.styled';

const fetchMovie = async searchWord => {
  try {
    const KEY = '298a5b49d75fb843dc4c4c38d9d64139';

    return await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${searchWord}&page=1`
    );
    // const trendingMovies = res.data.results;
    // console.log(trendingMovies);
  } catch (e) {
    console.log(e);
  }
};

const SearchMovies = () => {
  const [searchQuerry, setSearchQuerry] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const onChange = ({ target }) => {
    setSearchQuerry(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let { value } = event.target.lastChild;

    // if (value === searchQuerry) {
    //   return Notiflix.Notify.warning('Try another movies to find');
    // }
    // console.dir(event.target.lastChild.value);
    setSearchQuerry(value.toLowerCase().trim());
    if (searchQuerry.trim() === '') {
      Notiflix.Notify.warning('Enter title of movie to search');
      value = '';
      return;
    }

    if (!searchQuerry) {
      return;
    }
    try {
      // const { value } = event.target.lastChild;
      // setSearchQuerry(value.toLowerCase().trim());
      const getFilteredMovies = async () => {
        const {
          data: { results },
        } = await fetchMovie(searchQuerry);
        // console.log(results);

        if (!results.length) {
          Notiflix.Notify.warning(
            'Oops there are no movies by this search, try another title'
          );
        }
        const filteredData = results.map(
          ({
            id,
            poster_path,
            overview,
            popularity,
            genre_ids,
            original_title,
          }) => ({
            id,
            poster_path,
            overview,
            popularity,
            genre_ids,
            original_title,
          })
        );
        // console.log(filteredData);
        setFilteredMovies(filteredData);
        // console.log(filteredMovies);
      };

      getFilteredMovies();
    } catch (e) {
      console.log(e.message);
    }
    // setPage(1);
    // setImages([]);
    // setShowButton(false);
    // setIsLoading(true);
    // };
    setSearchQuerry('');
  };

  return (
    <div>
      <SearchBarHeader>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormBtn type="submit" className="button">
            <FaSistrix size="24px" fill="#fff" />
            <SearchFormBtnLabel className="button-label">
              Search
            </SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuerry}
            onChange={onChange}
          />
        </SearchForm>
      </SearchBarHeader>
      {filteredMovies && (
        <TrendingGallery>
          {filteredMovies.map(
            ({
              id,
              poster_path,

              original_title,
            }) => {
              return (
                <Link to={`/movies/${id}`} key={id}>
                  <TrendingItem>
                    <ImgThumb>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={original_title}
                        width="352"
                      />
                    </ImgThumb>
                    <TitleMovieThumb>
                      <h2>{original_title}</h2>
                    </TitleMovieThumb>
                  </TrendingItem>
                </Link>
              );
            }
          )}
        </TrendingGallery>
      )}
    </div>
  );
};

// SearchMovies.propTypes = {
//   handlerSubmit: PropTypes.func.isRequired,
// };

export default SearchMovies;
