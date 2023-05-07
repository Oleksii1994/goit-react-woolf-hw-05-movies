import axios from 'axios';

export const KEY = '298a5b49d75fb843dc4c4c38d9d64139';

export const fetchTrendingMoviesData = async () => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
    );
  } catch (e) {
    console.log(e);
  }
};

export const fetchMovieInfo = async movieId => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
    );
  } catch (e) {
    console.log(e);
  }
};

export const fetchMoviesBySearchWord = async searchWord => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${searchWord}&page=1`
    );
  } catch (e) {
    console.log(e);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
  } catch (e) {
    console.log(e);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
    );
  } catch (e) {
    console.log(e);
  }
};

export const fetchTrailerVideo = async movieId => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${KEY}&language=en-US`
    );
  } catch (e) {
    console.log(e);
  }
};
