import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';

import axios from 'axios';
const KEY = '298a5b49d75fb843dc4c4c38d9d64139';

const MovieInfo = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const pathToBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      const getInfo = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
        );

        setMovieDetails(data);
      };
      getInfo();
    } catch (e) {
      console.log(e.message);
      setMovieDetails({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(movieDetails.genres);

  return (
    <div>
      {/* <>{MovieId}</> */}
      <Link to={pathToBack.current}>Back</Link>
      {Boolean(Object.keys(movieDetails).length) && (
        <>
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
          {movieDetails.genres.map(({ name }) => name).join(', ')}
          <div>
            Additional Information
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>

              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Suspense fallback="Loading...">
            <Outlet />
          </Suspense>
        </>
      )}
      {!Object.keys(movieDetails).length && <p>Sorry, not found</p>}
    </div>
  );
};

export default MovieInfo;
