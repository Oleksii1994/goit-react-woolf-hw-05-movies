import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/api';
import {
  CastItem,
  ProfileImgThumb,
  ActorsGallery,
  ActorNameThumb,
  ActorPhoto,
} from './Cast.styled';

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
        } = await fetchMovieCast(movieId);

        setCast(normalizedCast(cast));
        return cast;
      } catch (e) {
        console.log(e.message);
      }
    };
    getCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ActorsGallery>
      {!cast.length ? (
        <p>Sorry, there is no information about cast</p>
      ) : (
        cast.map(({ id, character, name, profile_path }) => {
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
        })
      )}
    </ActorsGallery>
  );
};

export default Cast;
