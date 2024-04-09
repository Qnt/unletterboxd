import Image from 'next/image';
import React from 'react';
import { Movie } from '../lib/types';

const MovieCard = async ({ movie }: { movie: Movie }) => {
  return (
    <div className="flex max-w-48 flex-col">
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          width={500}
          height={200}
          alt={movie?.title ?? 'Movie title'}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-bold">{movie.title}</p>
        <div className="flex flex-row justify-between">
          <p>{movie.release_date?.split('-')[0]}</p>
          <p>{movie.vote_average.toFixed(1)} / 10</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
