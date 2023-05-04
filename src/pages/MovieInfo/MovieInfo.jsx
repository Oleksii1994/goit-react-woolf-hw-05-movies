// import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

const getMovieInfo = async id => {
  try {
    const KEY = '298a5b49d75fb843dc4c4c38d9d64139';

    return await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
    );
  } catch (e) {
    console.log(e.message);
  }
};

const MovieInfo = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  // console.log(movieId);
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

  useEffect(() => {
    // console.log(movieId);
    try {
      const getInfo = async () => {
        const {
          data,
          // : { poster_path, title, overview, popularity, genres, id },
        } = await getMovieInfo(movieId);
        // console.log(title, poster_path, overview, popularity, genres, id);
        console.log(data);
        setMovieDetails(data);
      };
      getInfo();
    } catch (e) {
      console.log(e.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(movieDetails.genres);

  return (
    <div>
      {/* <>{MovieId}</> */}
      <button>Back</button>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.title}
        width="352"
      />
      <h1>{movieDetails.title}</h1>
      <p>Average score: {movieDetails.vote_average}</p>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
      {/* <p>{movieDetails.genres}</p> */}
      <div>
        Additional Information
        <ul>
          <li>
            <a href="/">cast</a>
          </li>
          <li>
            <a href="/">reviews</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieInfo;
