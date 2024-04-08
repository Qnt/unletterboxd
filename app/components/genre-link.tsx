'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Genre } from '../lib/types';

export default function GenreLink({ id, name }: Genre) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  params.set('with_genres', id.toString());
  return (
    <li key={id} className="flex text-accent-foreground hover:bg-accent">
      <Link href={`/movies/discover?${params}`} className="px-4 py-2">
        {name}
      </Link>
    </li>
  );
}
