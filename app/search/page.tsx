import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import Movies from '../components/movies';
import { PaginationComponent } from '../components/pagination';
import { MoviesSkeleton } from '../components/skeletons';

export default async function Page({
  searchParams,
}: {
  searchParams: { searchQuery: string; page?: number };
}) {
  if (!searchParams.searchQuery) {
    redirect('/');
  }
  return (
    <main className="h-full w-full">
      <section className=" flex w-full flex-col gap-4 p-4">
        <p className="text-2xl font-bold">Search Page</p>
        <Suspense fallback={<MoviesSkeleton />}>
          <Movies searchParams={searchParams} variant="search" />
        </Suspense>
        <PaginationComponent page={searchParams?.page} />
      </section>
    </main>
  );
}
