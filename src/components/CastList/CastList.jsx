import PropTypes from 'prop-types';
import NotFoto from 'components/NotFoto/NotFoto';
import css from '../CastList/CastList.module.css';

export default function CastList({ casts }) {
  return (
    <ul>
      {casts.map(({ id, name, character, profile_path }) => {
        return (
          <li key={id + character} className={css.list}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt="foto"
                width={200}
              />
            ) : (
              <NotFoto />
            )}

            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}

CastList.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};
