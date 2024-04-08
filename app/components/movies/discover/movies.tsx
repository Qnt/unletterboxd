import { fetchMoviesDiscover } from '@/app/lib/data';
import MovieCard from '../../movie-card';

export default async function Movies({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const movies = await fetchMoviesDiscover(searchParams);

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
