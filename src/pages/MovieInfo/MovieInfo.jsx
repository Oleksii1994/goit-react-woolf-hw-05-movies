import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';

import { FaChevronLeft } from 'react-icons/fa';
import {
  MovieDetailsThumb,
  BackLink,
  MovieInfoCard,
  TextContentBox,
  OverviewBox,
  GenresBox,
  AdditionalInfoBox,
  AdditionalInfoList,
  AdditionalItemLink,
} from './MovieInfo.styled';

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

  return (
    <MovieDetailsThumb>
      <BackLink to={pathToBack.current}>
        <FaChevronLeft />
        Back
      </BackLink>
      {Boolean(Object.keys(movieDetails).length) && (
        <div>
          <MovieInfoCard>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                alt={movieDetails.title}
                width="352"
              />
            </div>
            <TextContentBox>
              <h1>{movieDetails.title}</h1>
              <p>Average score: {movieDetails.vote_average}</p>
              <OverviewBox>
                <h2>Overview</h2>
                <p>{movieDetails.overview}</p>
              </OverviewBox>
              <GenresBox>
                <h3>Genres</h3>
                {movieDetails.genres.map(({ name }) => name).join(', ')}
              </GenresBox>
              <AdditionalInfoBox>
                <h3>Additional Information</h3>
                <AdditionalInfoList>
                  <li>
                    <AdditionalItemLink to="cast">Cast</AdditionalItemLink>
                  </li>

                  <li>
                    <AdditionalItemLink to="reviews">
                      Reviews
                    </AdditionalItemLink>
                  </li>
                </AdditionalInfoList>
              </AdditionalInfoBox>
            </TextContentBox>
          </MovieInfoCard>

          <Suspense fallback="Loading...">
            <Outlet />
          </Suspense>
        </div>
      )}
      {!Object.keys(movieDetails).length && <p>Sorry, not found</p>}
    </MovieDetailsThumb>
  );
};

export default MovieInfo;
