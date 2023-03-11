import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'api/api';
// import css from '../Reviews/Reviews.module.css';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesReviews(id)
      .then(r => setReviews(r.data.results))
      .catch(error => console.log(error));
  }, [id]);
  //   console.log(reviews);

  return (
    <section>
      {reviews.length === 0 ? (
        <p>We don't have reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
