import MovieCard from '@/app/components/movie-card';
import Movies from '@/app/components/movies/discover/movies';
import { fetchMoviesDiscover } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  return (
    <main className="h-full w-full">
      <section className=" flex w-full flex-col gap-4 p-4">
        <p className="text-2xl font-bold">Top Rated</p>
        <Movies searchParams={searchParams} />
      </section>
    </main>
  );
}
