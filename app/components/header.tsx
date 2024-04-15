import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { searchMovie } from '../lib/actions';
import SearchBar from './search-bar';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

export default function Header() {
  return (
    <div className="ml-64 flex items-center justify-between gap-4 border-b p-4  text-2xl">
      <SearchBar search={searchMovie} />
      <div className="flex gap-2">
        <ThemeToggle />
        <Link href={'https://github.com/qnt/unletterboxd'} target="_blank">
          <Button variant="outline" size="icon">
            <GitHubLogoIcon width={20} height={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
