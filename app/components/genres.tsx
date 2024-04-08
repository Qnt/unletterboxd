import Link from 'next/link';
import { fetchGenres } from '../lib/data';
import { ScrollArea } from './ui/scroll-area';

export default async function Genres() {
  const genres = await fetchGenres();
  return (
    <ScrollArea>
      <ul>
        {genres?.map((genre) => (
          <li
            key={genre.id}
            className="hover:bg-accent text-accent-foreground flex"
          >
            <Link href="#" className="px-4 py-2">
              {genre?.name}
            </Link>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
