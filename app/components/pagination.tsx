'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/components/ui/pagination';
import { usePathname, useSearchParams } from 'next/navigation';

// Limited by TMDB API
const TOTAL_PAGES = 500;

export function PaginationComponent() {
  const totalPages = TOTAL_PAGES;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const page = Number(searchParams.get('page')) || 1;

  const createUrl = (page: number) => {
    params.set('page', `${page}`);
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {page !== 1 && <PaginationPrevious href={createUrl(page - 1)} />}
        </PaginationItem>
        <PaginationItem>
          {page === 1 ? (
            <PaginationLink href={createUrl(page)} isActive>
              {page}
            </PaginationLink>
          ) : page === totalPages ? (
            <PaginationLink href={createUrl(page - 2)}>
              {page - 2}
            </PaginationLink>
          ) : (
            <PaginationLink href={createUrl(page - 1)}>
              {page - 1}
            </PaginationLink>
          )}
        </PaginationItem>
        <PaginationItem>
          {page === 1 ? (
            <PaginationLink href={createUrl(page + 1)}>
              {page + 1}
            </PaginationLink>
          ) : page === totalPages ? (
            <PaginationLink href={createUrl(page - 1)}>
              {page - 1}
            </PaginationLink>
          ) : (
            <PaginationLink href={createUrl(page)} isActive>
              {page}
            </PaginationLink>
          )}
        </PaginationItem>
        <PaginationItem>
          {page === 1 ? (
            <PaginationLink href={createUrl(page + 2)}>
              {page + 2}
            </PaginationLink>
          ) : page === totalPages ? (
            <PaginationLink href={createUrl(page)} isActive>
              {page}
            </PaginationLink>
          ) : (
            <PaginationLink href={createUrl(page + 1)}>
              {page + 1}
            </PaginationLink>
          )}
        </PaginationItem>
        {page !== totalPages && page !== totalPages - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          {page !== totalPages && <PaginationNext href={createUrl(page + 1)} />}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
