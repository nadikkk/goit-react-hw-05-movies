import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';
// import css from '../Movies/Movies.module.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
//   console.log(query);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value.trim() });
   //  console.log(e);
    form.reset();
  };

  useEffect(() => {
    fetchMoviesSearch(query)
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          //   onChange={e => setSearchParams({ query: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </section>
  );
}
