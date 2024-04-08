import MovieCard from './components/movie-card';
import { fetchMovies } from './lib/data';

export default async function Home() {
  const movies = await fetchMovies();
  return (
    <main className="h-full w-full pl-60">
      <section className=" flex w-full flex-col gap-4 p-4">
        <p className="text-2xl font-bold">Popular Movies</p>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
          {movies?.results?.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
