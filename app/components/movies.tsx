import {
  fetchMoviesDiscover,
  fetchMoviesPopular,
  fetchMoviesTopRated,
  searchMovie,
} from '@/app/lib/data';
import { Movies as MoviesType } from '../lib/types';
import MovieCard from './movie-card';

export default async function Movies({
  searchParams,
  variant,
  movies,
}: {
  searchParams?: { page?: number; searchQuery?: string; with_genres?: string };
  variant?: 'popular' | 'top-rated' | 'discover' | 'search';
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
        if (searchParams) {
          movies = await fetchMoviesDiscover(searchParams);
        }
        break;
      }
      case 'search': {
        if (searchParams && searchParams.searchQuery) {
          movies = await searchMovie({
            page: searchParams.page,
            searchQuery: searchParams.searchQuery,
          });
        }
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
