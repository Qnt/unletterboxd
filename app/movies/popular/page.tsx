import Movies from '@/app/components/movies';
import { PaginationComponent } from '@/app/components/pagination';
import { MoviesSkeleton } from '@/app/components/skeletons';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams: {
    page: number;
  };
}) {
  return (
    <main className="h-full w-full">
      <section className=" flex w-full flex-col gap-4 p-4">
        <p className="text-2xl font-bold">Popular Movies</p>
        <Suspense key={searchParams?.page} fallback={<MoviesSkeleton />}>
          <Movies variant={'popular'} searchParams={searchParams} />
        </Suspense>
        <PaginationComponent page={searchParams?.page} />
      </section>
    </main>
  );
}
