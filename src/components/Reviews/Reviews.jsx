import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem, ReviewsList } from './Reviews.styled';
import { fetchMovieReviews } from 'api/api';
import { normalizedReviews } from 'helpers/helpers';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const {
          data: { results },
        } = await fetchMovieReviews(movieId);

        setReviews(normalizedReviews(results));
      } catch (e) {
        setReviews([]);
      }
    };
    getReviews();
  }, [movieId]);

  return !reviews.length ? (
    <p className="msg">Possibly, there are no reviews</p>
  ) : (
    <ReviewsList>
      {reviews.map(({ id, content }) => {
        return (
          <ReviewItem key={id}>
            <p>{content}</p>
          </ReviewItem>
        );
      })}
    </ReviewsList>
  );
};

export default Reviews;
