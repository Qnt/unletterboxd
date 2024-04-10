'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Genre } from '../lib/types';

export default function GenreLink({ id, name }: Genre) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams();
  params.set('with_genres', id.toString());
  return (
    <li
      key={id}
      className={clsx('flex text-accent-foreground hover:bg-accent', {
        // 'bg-accent': `${params}` === `${searchParams}`,
        'bg-accent':
          params.get('with_genres') === searchParams.get('with_genres'),
      })}
    >
      <Link href={`/movies/discover?${params}`} className="px-4 py-2">
        {name}
      </Link>
    </li>
  );
}
