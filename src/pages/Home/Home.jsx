import { useEffect, useState } from 'react';
import { fetchMovies } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';
// import css from '../Home/Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies()
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return <MoviesList movies={movies} />;
}
