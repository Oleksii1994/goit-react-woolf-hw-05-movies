import { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { Notify } from 'notiflix';
import {
  SearchForm,
  SearchInput,
  SearchFormBtn,
  SearchFormBtnLabel,
} from './SearchFormMovies.styled';

export const SearchFormMovies = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let { value } = event.target.elements.search;

    setSearchQuery(value.toLowerCase().trim());

    if (searchQuery.trim() === '') {
      Notify.warning('Enter title of movie to search');
      value = '';
      return;
    }
    onSubmit(value);
    setSearchQuery('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormBtn type="submit" className="button">
        <FaSistrix size="24px" fill="#ffffff" />
        <SearchFormBtnLabel className="button-label">Search</SearchFormBtnLabel>
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
  );
};
