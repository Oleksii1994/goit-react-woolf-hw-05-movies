import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTrailerVideo } from 'api/api';
import { Frame, IFrameBox } from './Trailer.styled';

const Trailer = () => {
  const [video, setVideos] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getTrailerVideo = async () => {
      try {
        const {
          data: { results },
        } = await fetchTrailerVideo(movieId);

        setVideos(results[0]);

        return video;
      } catch (e) {
        console.log(e.message);
      }
    };
    getTrailerVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IFrameBox>
      {!video ? (
        <p>Oops there're no video to this movie</p>
      ) : (
        <Frame
          width="680"
          height="400"
          src={`https://www.youtube.com/embed/${video.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Frame>
      )}
    </IFrameBox>
  );
};

export default Trailer;
