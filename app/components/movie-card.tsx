import moviePosterPlaceholder from '@/public/basic-movie-icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Movie } from '../lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

const MovieCard = async ({ movie }: { movie: Movie }) => {
  return (
    <Card className="flex h-full w-full flex-col justify-between overflow-hidden shadow-md hover:bg-accent">
      <Link href={`/movies/${movie.id}`} className="cursor-pointer">
        <CardContent className="flex aspect-[2/3] flex-col p-0">
          {movie?.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              width={300}
              height={300}
              alt={movie?.title ?? 'Movie title'}
            />
          ) : (
            <Image
              src={moviePosterPlaceholder}
              alt={movie?.title ?? 'Movie title'}
              className="my-auto h-auto w-full"
            />
          )}
        </CardContent>
      </Link>
      <CardHeader className="flex grow flex-col px-2 py-1">
        <Link href={`/movies/${movie.id}`}>
          <CardTitle className="w-fit cursor-pointer text-base font-bold hover:text-blue-600">
            {movie.title}
          </CardTitle>
        </Link>
        <CardDescription className="flex flex-row justify-between text-sm ">
          <span>
            {movie.release_date ? movie.release_date?.split('-')[0] : 'TBA'}
          </span>
          <span>{movie.vote_average.toFixed(1)} / 10</span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default MovieCard;
