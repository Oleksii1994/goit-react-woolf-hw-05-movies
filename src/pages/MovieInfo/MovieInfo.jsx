// import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MovieInfo = () => {
  const { MovieId } = useParams();
  useEffect(() => {}, []);

  return (
    <div>
      <>{MovieId}</>
      <button>Back</button>
      <img src="" alt="" />
      <h1>Title</h1>
      <p>User score:</p>
      <h2>Overview</h2>
      <p>overview</p>
      <h3>Genres</h3>
      <p>genres</p>
      <div>
        AdditionalInformation<a href="/">cast</a>
        <a href="/">reviews</a>
      </div>
    </div>
  );
};

export default MovieInfo;
