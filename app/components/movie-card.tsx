import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Movie } from '../lib/types';
import { Card } from './ui/card';

const MovieCard = async ({ movie }: { movie: Movie }) => {
  return (
    <Card className="flex h-full w-full flex-col overflow-hidden shadow-md transition ease-in-out hover:-translate-y-1 hover:bg-accent">
      <Link href="#" className="cursor-pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          width={500}
          height={200}
          alt={movie?.title ?? 'Movie title'}
        />
      </Link>
      <div className="flex grow flex-col px-2 py-1">
        <Link
          href="#"
          className="w-fit cursor-pointer text-base font-bold hover:text-blue-600"
        >
          {movie.title}
        </Link>
        <div className="flex flex-row justify-between text-sm ">
          <p>{movie.release_date?.split('-')[0]}</p>
          <p>{movie.vote_average.toFixed(1)} / 10</p>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
