'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
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
        <li
          key={link.name}
          className={clsx('text-accent-foreground hover:bg-accent', {
            'bg-accent': pathname === link.href,
          })}
        >
          <Link href={link.href} className="block px-4 py-2">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
