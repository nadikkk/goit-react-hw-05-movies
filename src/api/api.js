import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '227641d46d0a2022c59812f4f87d3e4f',
  },
});

export async function fetchMovies() {
  const data = await instance.get('trending/all/week');
  return data;
}
export async function fetchMoviesId(id) {
  const data = await instance.get(`movie/${id}`);
  return data;
}
export async function fetchMoviesCast(id) {
	const data = await instance.get(`movie/${id}/credits`);
	return data;
 }
 export async function fetchMoviesReviews(id) {
	const data = await instance.get(`movie/${id}/reviews`);
	return data;
 }
 export async function fetchMoviesSearch(query) {
	const data = await instance.get(`search/movie`, {params: {query}});
	return data;
 }
