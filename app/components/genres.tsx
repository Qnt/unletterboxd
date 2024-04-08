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
          // <li
          //   key={genre.id}
          //   className="flex text-accent-foreground hover:bg-accent"
          // >
          //   <Link href="#" className="px-4 py-2">
          //     {genre?.name}
          //   </Link>
          // </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
