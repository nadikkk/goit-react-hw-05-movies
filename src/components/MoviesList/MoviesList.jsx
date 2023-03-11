import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
// import css from '../MoviesList/MoviesList.module.css';

export default function MoviesList({ movies }) {
	const location = useLocation();
  return (
	<section>
	<ul>
	  {movies.map(({ id, title, name }) => {
		 return (
			<li key={id}>
			  <Link to={`/movies/${id}`} state={{ from: location }}>{title ? title : name}</Link>
			</li>
		 );
	  })}
	</ul>
 </section>
  );
}

MoviesList.propTypes = {
	movies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};
