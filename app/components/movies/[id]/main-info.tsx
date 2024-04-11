import { fetchMovieDetails } from '@/app/lib/data';
import movieIcon from '@/public/basic-movie-icon.svg';
import Image from 'next/image';

export default async function MainInfo({ id }: { id: number }) {
  const movie = await fetchMovieDetails(id);

  return (
    <section className="flex gap-4">
      <div className="flex aspect-[2/3] shrink-0 basis-80 flex-col">
        {movie?.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt="Movie poster"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-auto w-full rounded-md"
            priority
          />
        ) : (
          <Image
            src={movieIcon}
            alt="Movie poster"
            className="my-auto h-auto w-full"
          />
        )}
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
            <span>{movie?.genres?.map((genre) => genre.name).join(', ')}</span>
          </div>
        </header>
        <div>
          <h3 className="whitespace-pre-wrap text-lg font-bold">Overview</h3>
          <div className="italic">{movie?.tagline}</div>
          <p>{movie?.overview}</p>
        </div>
      </div>
    </section>
  );
}
