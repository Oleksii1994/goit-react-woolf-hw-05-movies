import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';

import { ThreeDots } from 'react-loader-spinner';

import { fetchMovieInfo } from 'api/api';
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
import { LoaderContainer } from 'components/Layout/Layout.styled';

const MovieInfo = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const pathToBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      const getInfo = async () => {
        const { data } = await fetchMovieInfo(movieId);

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
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                    : `https://media.istockphoto.com/id/147273331/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D1%94-%D0%B2%D1%96%D0%B4%D1%80%D0%BE-%D0%BF%D0%BE%D0%BF%D0%BA%D0%BE%D1%80%D0%BD%D1%83.jpg?s=2048x2048&w=is&k=20&c=EVEpgBCnZmkrieihX5eDgsssBgcGyU71woNkj5N4FiM=`
                }
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

          <Suspense
            fallback={
              <LoaderContainer>
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#ff00aa7a"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </LoaderContainer>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      )}
      {/* {!Object.keys(movieDetails).length && <p>Sorry, not found</p>} */}
    </MovieDetailsThumb>
  );
};

export default MovieInfo;
