import { Movie } from '../lib/types';

export default function SearchItem({ movie }: { movie: Movie }) {
  return (
    <li data-id={movie.id} className="cursor-pointer p-2 hover:bg-accent">
      <p className="font-bold">{movie.title}</p>
      <p className="text-sm text-muted-foreground">
        {movie.release_date?.split('-')[0]}
      </p>
    </li>
  );
}
