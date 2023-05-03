// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import {
  SearchBarHeader,
  SearchForm,
  SearchInput,
  SearchFormBtn,
  SearchFormBtnLabel,
} from './Movies.styled';

const SearchMovies = ({ handlerSubmit }) => {
  const [searchQuerry, setSearchQuerry] = useState('');

  const onChange = ({ target }) => {
    setSearchQuerry(target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    handlerSubmit(searchQuerry);
    setSearchQuerry('');
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={onSubmit}>
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
  );
};

SearchMovies.propTypes = {
  handlerSubmit: PropTypes.func.isRequired,
};

export default SearchMovies;
