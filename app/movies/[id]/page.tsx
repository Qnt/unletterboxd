import Credits from '@/app/components/movies/[id]/credits';
import { fetchMovieDetails } from '@/app/lib/data';
import { Movie } from '@/app/lib/types';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function Page({
  params,
}: {
  params: { id: Movie['id'] };
}) {
  const movie = await fetchMovieDetails(params.id);
  return (
    <main className="flex grow-0 flex-col gap-6 p-4">
      {/* Main details */}
      <section className="flex gap-4">
        <div className="shrink-0 basis-80">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt="Movie poster"
            width={800}
            height={800}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <header>
            <h2 className="text-xl font-bold">{movie?.title}</h2>
            <div className="flex gap-4">
              <span>{movie?.release_date?.split('-')[0]}</span>
              <span>{movie?.vote_average.toFixed(1)} / 10</span>
              <span>
                {movie?.runtime} {movie?.runtime ? 'min' : ''}
              </span>
            </div>
            <div>
              <span>
                {movie?.genres?.map((genre) => genre.name).join(', ')}
              </span>
            </div>
          </header>
          <div>
            <h3 className="text-lg font-bold">Overview</h3>
            <div className="italic">{movie?.tagline}</div>
            <p>{movie?.overview}</p>
          </div>
        </div>
      </section>
      {/* Cast */}
      <Suspense fallback={<p>Loading...</p>}>
        <Credits id={params.id} />
      </Suspense>
    </main>
  );
}
