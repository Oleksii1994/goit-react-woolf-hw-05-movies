import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem, ReviewsList } from './Reviews.styled';

const KEY = '298a5b49d75fb843dc4c4c38d9d64139';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const normalizedReviews = arr => {
    return arr.map(({ id, content }) => ({
      id,
      content,
    }));
  };

  useEffect(() => {
    const getReviews = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
        );

        setReviews(normalizedReviews(results));

        return reviews;
      } catch (e) {
        console.log(e.message);
      }
    };
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ReviewsList>
      {!reviews.length ? (
        <p className="msg">Sorry, there are no reviews</p>
      ) : (
        reviews.map(({ id, content }) => {
          return (
            <ReviewItem key={id}>
              <p>{content}</p>
            </ReviewItem>
          );
        })
      )}
    </ReviewsList>
  );
};

export default Reviews;
