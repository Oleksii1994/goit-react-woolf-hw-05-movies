import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem, ReviewsList } from './Reviews.styled';
import { fetchMovieReviews } from 'api/api';

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
        } = await fetchMovieReviews(movieId);

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
