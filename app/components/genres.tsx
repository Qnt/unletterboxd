import Link from 'next/link';
import { fetchGenres } from '../lib/data';
import GenreLink from './genre-link';
import { ScrollArea } from './ui/scroll-area';

export default async function Genres() {
  const genres = await fetchGenres();

  return (
    <ScrollArea>
      <ul>
        {genres?.map((genre) => (
          <GenreLink key={genre.id} id={genre.id} name={genre?.name} />
        ))}
      </ul>
    </ScrollArea>
  );
}
