import {
  TrendingItem,
  TrendingGallery,
  ImgThumb,
  TitleMovieThumb,
} from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';
import { PosterImg } from 'pages/Movies/Movies.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <TrendingGallery>
      {movies.map(({ id, poster_path, title }) => {
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
                  alt={title}
                  width="352"
                />
              </ImgThumb>
              <TitleMovieThumb>
                <h2>{title}</h2>
              </TitleMovieThumb>
            </Link>
          </TrendingItem>
        );
      })}
    </TrendingGallery>
  );
};
