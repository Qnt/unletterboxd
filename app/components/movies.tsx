import {
  fetchMoviesDiscover,
  fetchMoviesPopular,
  fetchMoviesTopRated,
} from '@/app/lib/data';
import { MoviesDiscoverQuery } from '../lib/types';
import MovieCard from './movie-card';

export default async function Movies({
  searchParams,
  variant,
}: {
  searchParams?: MoviesDiscoverQuery;
  variant?: 'popular' | 'top-rated' | 'discover';
}) {
  let movies;
  switch (variant) {
    case 'popular': {
      movies = await fetchMoviesPopular();
      break;
    }
    case 'top-rated': {
      movies = await fetchMoviesTopRated();
      break;
    }
    case 'discover': {
      movies = await fetchMoviesDiscover(searchParams);
      break;
    }
    default: {
      movies = await fetchMoviesPopular();
    }
  }

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
      {movies?.results?.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
