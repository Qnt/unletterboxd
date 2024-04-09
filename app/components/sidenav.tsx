import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Genres from './genres';
import NavLinks from './nav-links';

export default function Sidenav() {
  return (
    <nav className="w-72 shrink-0 border-r">
      <div className="fixed inset-0 flex w-72 flex-col">
        <div className="p-4 text-2xl font-bold">
          <Link href="/">TMDB Discovery</Link>
        </div>
        <hr />
        <div className="px-4 py-2">
          <h3 className="text-lg">Discover</h3>
        </div>
        <NavLinks />
        <hr />

        <div className="px-4 py-2">
          <h3 className="text-lg">Genres</h3>
        </div>
        <Suspense fallback={<p>Loading</p>}>
          <Genres />
        </Suspense>
        <div className="flex flex-col items-center px-4 pb-4 pt-8">
          <Link href="https://www.themoviedb.org">
            <Image
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
              alt="TMDB logo"
              width={100}
              height={40}
            />
          </Link>
          <p className="pt-2 text-center">
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </p>
        </div>
      </div>
    </nav>
  );
}
