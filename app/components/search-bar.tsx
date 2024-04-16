'use client';

import { LoaderCircle } from 'lucide-react';
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
  search: (query: string) => Promise<Movies>;
}) {
  const [movies, setMovies] = useState<Movies>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isFoundNothing, setIsFoundNothing] = useState(false);

  const handleSumbit = (ev: React.FormEvent) => {
    ev.preventDefault();
  };

  const handleInput = useDebouncedCallback(async (query: string) => {
    setIsTyping(true);
    let data = [] as Movies;
    if (query.trim().length > 0) {
      setIsSearching(true);
      data = await search(query);
      setIsSearching(false);
      setIsFoundNothing(!data?.length);
    }
    setMovies(data);
  }, 300);

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
          onFocus={() => setIsTyping(true)}
        />
        {isTyping && (
          <Card className="absolute left-0 top-12 flex w-full flex-col overflow-auto bg-background text-base shadow-md">
            {!isFoundNothing && !isSearching && (
              <SearchResultList movies={movies} />
            )}
            {/* {isSearching && <p className="self-center p-4">Searching...</p>} */}
            {isSearching && (
              <div className="self-center p-4">
                <LoaderCircle className="animate-spin" />
              </div>
            )}
            {isFoundNothing && !isSearching && (
              <p className="self-center p-4">No results found.</p>
            )}
          </Card>
        )}
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}
