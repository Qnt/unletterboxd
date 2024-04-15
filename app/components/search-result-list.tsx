import { useRouter } from 'next/navigation';
import React from 'react';
import { Movies } from '../lib/types';
import SearchItem from './search-item';
import { Card } from './ui/card';

export default function SearchResultList({
  movies = [],
  isFoundNothing,
  isSearching,
}: {
  movies: Movies;
  isFoundNothing: boolean;
  isSearching: boolean;
}) {
  const router = useRouter();

  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    const el = ev.target as HTMLElement;
    const listEl = el.closest('li');
    if (listEl) {
      const id = listEl.getAttribute('data-id');
      router.push(`/movies/${id}`);
    }
  };

  return (
    <>
      {isSearching ? (
        <p className="self-center p-4">Searching...</p>
      ) : isFoundNothing ? (
        <p className="self-center p-4">No results found.</p>
      ) : (
        <ul onClick={(ev) => handleClick(ev)}>
          {movies
            ?.slice(0, 6)
            .map((movie) => <SearchItem key={movie.id} movie={movie} />)}
        </ul>
      )}
    </>
  );
}
