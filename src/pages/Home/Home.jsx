// import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
// const key = '298a5b49d75fb843dc4c4c38d9d64139';

const fetchData = async () => {
  try {
    return await axios(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=298a5b49d75fb843dc4c4c38d9d64139'
    );
    // const trendingMovies = response.data.results;
    // console.log(trendingMovies);
    // return trendingMovies;
  } catch (e) {
    console.log(e);
  }
};
// fetch();

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const {
          data: { results },
        } = await fetchData();

        console.log(results);

        const filteredData = results.map(
          ({
            poster_path,
            overview,
            popularity,
            genre_ids,
            original_title,
          }) => ({
            poster_path,
            overview,
            popularity,
            genre_ids,
            original_title,
          })
        );
        console.log(filteredData);
        setPopularMovies(filteredData);
      };
      getTrendingMovies();
    } catch (e) {
      console.log(e);
    }

    // console.log(popularMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(popularMovies);

  return (
    <div>
      <ul>
        {popularMovies.map(
          ({
            poster_path,
            overview,
            popularity,
            genre_ids,
            original_title,
          }) => {
            return (
              <li key={poster_path}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={original_title}
                  width="400"
                />
                <h2>{original_title}</h2>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Home;
