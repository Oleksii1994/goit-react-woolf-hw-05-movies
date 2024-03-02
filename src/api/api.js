import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '298a5b49d75fb843dc4c4c38d9d64139';

export const fetchTrendingMoviesData = async () => {
  return await axios.get(`/trending/movie/week?api_key=${KEY}`);
};

export const fetchMovieInfo = async movieId => {
  return await axios.get(`/movie/${movieId}?api_key=${KEY}&language=en-US`);
};

export const fetchMoviesBySearchWord = async searchWord => {
  return await axios.get(
    `/search/movie?api_key=${KEY}&language=en-US&query=${searchWord}&page=1`
  );
};

export const fetchMovieCast = async movieId => {
  return await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
};

export const fetchMovieReviews = async movieId => {
  return await axios.get(
    `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
  );
};

export const fetchTrailerVideo = async movieId => {
  return await axios.get(
    `/movie/${movieId}/videos?api_key=${KEY}&language=en-US`
  );
};
