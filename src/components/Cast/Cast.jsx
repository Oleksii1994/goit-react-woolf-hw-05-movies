// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastItem,
  ProfileImgThumb,
  ActorsGallery,
  ActorNameThumb,
  ActorPhoto,
} from './Cast.styled';

const KEY = '298a5b49d75fb843dc4c4c38d9d64139';

const Cast = () => {
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
    <ActorsGallery>
      {cast.map(({ id, character, name, profile_path }) => {
        return (
          <CastItem key={id}>
            <ProfileImgThumb>
              <ActorPhoto
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : `https://as1.ftcdn.net/v2/jpg/05/64/45/52/1000_F_564455291_RRMiR6jlecxRBpSdtOT1KAX8a8FRhinM.jpg`
                }
                alt={name}
                width="280"
                height="420"
              />
            </ProfileImgThumb>
            <ActorNameThumb>
              <h3>{name}</h3>
              <p>{character}</p>
            </ActorNameThumb>
          </CastItem>
        );
      })}
    </ActorsGallery>
  );
};

export default Cast;
