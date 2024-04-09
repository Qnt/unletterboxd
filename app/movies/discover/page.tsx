import Movies from '@/app/components/movies';
import { MoviesDiscoverQuery } from '@/app/lib/types';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams: MoviesDiscoverQuery;
}) {
  return (
    <main className="h-full w-full">
      <section className=" flex w-full flex-col gap-4 p-4">
        <p className="text-2xl font-bold">Top Rated</p>
        <Suspense key={searchParams?.with_genres} fallback={<p>Loading...</p>}>
          <Movies searchParams={searchParams} variant="discover" />
        </Suspense>
      </section>
    </main>
  );
}
