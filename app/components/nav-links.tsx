'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LinkType } from '../lib/types';

const links: LinkType[] = [
  { name: 'Popular', href: '/movies/popular' },
  { name: 'Top Rated', href: '/movies/top-rated' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <ul>
      {links.map((link) => (
        <li key={link.name} className="hover:bg-accent text-accent-foreground">
          <Link href="/movies/popular" className="block px-4 py-2">
            Popular
          </Link>
        </li>
      ))}
    </ul>
  );
}
