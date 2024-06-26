import tmdbLogo from '@/public/Tmdb.new.logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Genres from './genres';
import NavLinks from './nav-links';

export default function Sidenav() {
  return (
    <nav className="fixed inset-0 flex w-64 flex-col border-r">
      <div className="flex gap-4 p-4 text-4xl font-bold">
        <Link href="/">Unletterboxd</Link>
      </div>
      <hr />
      <div className="px-4 py-2">
        <p className="text-lg">Discover</p>
      </div>
      <NavLinks />
      <hr />

      <div className="px-4 py-2">
        <p className="text-lg">Genres</p>
      </div>
      <Suspense fallback={<p className="text-center">loading...</p>}>
        <Genres />
      </Suspense>
      <div className="mt-auto flex items-center gap-4 px-4 pb-4 pt-8">
        <Link href="https://www.themoviedb.org">
          <Image src={tmdbLogo} alt="TMDB logo" className="h-auto w-full" />
        </Link>
        <p className="pt-2">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </nav>
  );
}
