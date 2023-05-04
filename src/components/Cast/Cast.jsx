// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const KEY = '298a5b49d75fb843dc4c4c38d9d64139';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const normalizedCast = arr => {
    return arr.map(({ id, character, name, profile_path }) => ({
      id,
      character,
      name,
      profile_path,
    }));
  };
  useEffect(() => {
    const getCast = async () => {
      try {
        const {
          data: { cast },
        } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
        );
        // console.log(cast);
        setCast(normalizedCast(cast));
        return cast;
      } catch (e) {
        console.log(e.message);
      }
    };
    getCast();
  }, [cast, movieId]);

  return (
    <ul>
      {cast.map(({ id, character, name, profile_path }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};
