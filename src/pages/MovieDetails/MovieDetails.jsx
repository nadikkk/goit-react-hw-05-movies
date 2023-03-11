import { useEffect, useState, Suspense  } from 'react';
import { Link, Outlet, useParams, useLocation, useNavigate} from 'react-router-dom';
import { fetchMoviesId } from 'api/api';
import MovieCard from 'components/MovieCard/MovieCard';
// import css from '../MovieDetails/MovieDetails.module.css';

export default function MovieDetails() {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('initial');
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
	navigate(location?.state?.from ?? "/");
  }

  useEffect(() => {
    setStatus('loading');
    fetchMoviesId(id)
      .then(response => setMovie(response.data))
      .catch(error => console.log(error))
      .finally(() => setStatus('response'));
  }, [id]);
//   console.log(location.state);
  return (
    <section>
      <button onClick={handleGoBack}>Go back</button>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'response' && <MovieCard movie={movie} />}
      <div className="">
        <p>Additional information</p>
        <ul>
          <li key="Cast">
            <Link to="cast" state={location.state}>Cast</Link>
          </li>
          <li key="Reviews">
            <Link to="reviews" state={location.state} >Reviews</Link>
          </li>
        </ul>
      </div>
		<Suspense fallback={<div>Loading...</div>}>
        <Outlet />
		</Suspense>
    </section>
  );
}

// MovieDetails.propTypes = {

// }
