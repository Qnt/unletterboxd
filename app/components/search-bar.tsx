'use client';

import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Movies } from '../lib/types';
import SearchResultList from './search-result-list';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';

export default function SearchBar({
  search,
}: {
  search: ({
    searchQuery,
    page,
  }: {
    searchQuery: string;
    page?: number;
  }) => Promise<Movies>;
}) {
  const [movies, setMovies] = useState<Movies>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isFoundMovies, setIsFoundMovies] = useState(false);
  const router = useRouter();

  const handleSumbit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const searchParams = new URLSearchParams({ searchQuery: input });
    router.push(`/search?${searchParams}`);
  };

  const handleInput = useDebouncedCallback(async (query: string) => {
    let data = [] as Movies;
    if (query.trim().length > 0) {
      setIsTyping(true);
      setIsSearching(true);
      data = (await search({ searchQuery: query })) ?? [];
      setIsSearching(false);
    } else {
      setIsTyping(false);
    }
    if (data) {
      setMovies(data);
      setIsFoundMovies(data.length > 0);
    }
  }, 300);

  const handleFocus = (query: string) => {
    if (query.trim().length > 0) {
      setIsTyping(true);
    }
  };

  return (
    <form
      className="flex max-w-[500px] grow gap-2"
      onSubmit={(ev) => handleSumbit(ev)}
    >
      <label htmlFor="search" className="sr-only">
        Search movies
      </label>
      <div className="relative grow">
        <Input
          id="search"
          type="search"
          placeholder="Search movies"
          maxLength={100}
          required
          value={input}
          onInput={(ev) => {
            setInput(ev.currentTarget.value);
            handleInput(ev.currentTarget.value);
          }}
          onBlur={useDebouncedCallback(() => setIsTyping(false), 300)}
          onFocus={(ev) => handleFocus(ev.currentTarget.value)}
        />
        {isTyping && (
          <Card className="absolute left-0 top-12 flex w-full flex-col overflow-auto bg-background text-base shadow-md">
            {isFoundMovies && !isSearching && (
              <SearchResultList movies={movies} />
            )}
            {isSearching && (
              <div className="self-center p-4">
                <LoaderCircle className="animate-spin" />
              </div>
            )}
            {!isFoundMovies && !isSearching && (
              <p className="self-center p-4 font-bold">No results found.</p>
            )}
          </Card>
        )}
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}
