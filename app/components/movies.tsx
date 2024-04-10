import {
  fetchMoviesDiscover,
  fetchMoviesPopular,
  fetchMoviesTopRated,
} from '@/app/lib/data';
import { MoviesDiscoverQuery, Movies as MoviesType } from '../lib/types';
import MovieCard from './movie-card';
import { PaginationComponent } from './pagination';

export default async function Movies({
  searchParams,
  variant,
  movies,
}: {
  searchParams?: MoviesDiscoverQuery;
  variant?: 'popular' | 'top-rated' | 'discover';
  movies?: MoviesType;
}) {
  if (!movies) {
    switch (variant) {
      case 'popular': {
        movies = await fetchMoviesPopular(searchParams?.page);
        break;
      }
      case 'top-rated': {
        movies = await fetchMoviesTopRated(searchParams?.page);
        break;
      }
      case 'discover': {
        movies = await fetchMoviesDiscover(searchParams);
        break;
      }
      default: {
        movies = await fetchMoviesPopular(searchParams?.page);
      }
    }
  }

  return (
    <>
      {!movies && <p>Nothing found</p>}
      {movies && (
        <>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
            {movies.map((movie) => (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
