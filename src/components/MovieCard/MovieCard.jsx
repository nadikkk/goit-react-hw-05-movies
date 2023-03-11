import PropTypes from 'prop-types';
import NotFoto from 'components/NotFoto/NotFoto';
import css from '../MovieCard/MovieCard.module.css';

export default function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  return (
    <div className={css.wrap}>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width={400}
        ></img>
      ) : (
        <NotFoto />
      )}

      <div className={css.card}>
        <h1>
          {title} ({release_date.slice(0, 4)}){' '}
        </h1>
        <p>User score: {(vote_average * 10).toFixed(0)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres.map(genre => genre.name).join(' ')}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    enres: PropTypes.array,
  }).isRequired,
};
