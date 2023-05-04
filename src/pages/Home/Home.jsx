// import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  TrendingItem,
  TrendingGallery,
  ImgThumb,
  TitleMovieThumb,
} from './Home.styled';
import { PosterImg } from 'pages/Movies/Movies.styled';

const fetchData = async () => {
  try {
    const KEY = '298a5b49d75fb843dc4c4c38d9d64139';

    return await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
    );
    // const trendingMovies = res.data.results;
    // console.log(trendingMovies);
  } catch (e) {
    console.log(e);
  }
};

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const {
          data: { results },
        } = await fetchData();

        // console.log(results);

        const filteredData = results.map(
          ({ id, poster_path, overview, popularity, genre_ids, title }) => ({
            id,
            poster_path,
            overview,
            popularity,
            genre_ids,
            title,
          })
        );

        setPopularMovies(filteredData);
      };
      getTrendingMovies();
    } catch (e) {
      console.log(e);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TrendingGallery>
      {popularMovies.map(
        ({
          id,
          poster_path,

          title,
        }) => {
          return (
            <Link to={`/movies/${id}`} key={id}>
              <TrendingItem>
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
              </TrendingItem>
            </Link>
          );
        }
      )}
    </TrendingGallery>
  );
};

export default Home;
