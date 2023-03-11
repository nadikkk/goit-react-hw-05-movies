import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'api/api';
import CastList from 'components/CastList/CastList';
// import css from '../Cast/Cast.module.css';

export default function Cast() {
  const { id } = useParams();
  const [casts, setCast] = useState([]);
//   console.log(id);
  useEffect(() => {
    fetchMoviesCast(id)
      .then(r => setCast(r.data.cast))
      .catch(error => console.log(error));
  }, [id]);
//   console.log(casts.length);

  return (
    <section>
      {casts.length === 0 ? (
        <p>We do not have cast for this movie</p>
      ) : (
        <CastList casts={casts} />
      )}
    </section>
  );
}

