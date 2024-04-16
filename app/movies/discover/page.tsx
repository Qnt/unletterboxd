import GenreTitle from '@/app/components/genre-title';
import Movies from '@/app/components/movies';
import { PaginationComponent } from '@/app/components/pagination';
import { MoviesSkeleton, TitleSkeleton } from '@/app/components/skeletons';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams?: { with_genres: string; page?: number };
}) {
  return (
    <main className="h-full w-full">
      <section className=" flex w-full flex-col gap-4 p-4">
        <Suspense fallback={<TitleSkeleton />}>
          <GenreTitle genreId={Number(searchParams?.with_genres)} />
        </Suspense>
        <Suspense
          key={`${searchParams?.with_genres}&${searchParams?.page}`}
          fallback={<MoviesSkeleton />}
        >
          <Movies searchParams={searchParams} variant="discover" />
        </Suspense>
        <PaginationComponent page={searchParams?.page} />
      </section>
    </main>
  );
}
