import Credits from '@/app/components/movies/[id]/credits';
import MainInfo from '@/app/components/movies/[id]/main-info';
import {
  MoveiCreditsSkeleton,
  MovieMainInfoSkeleton,
} from '@/app/components/skeletons';
import { Movie } from '@/app/lib/types';
import { Suspense } from 'react';

export default async function Page({
  params,
}: {
  params: { id: Movie['id'] };
}) {
  return (
    <main className="flex grow-0 flex-col gap-6 p-4">
      {/* Main details */}
      <Suspense fallback={<MovieMainInfoSkeleton />}>
        <MainInfo id={params.id} />
      </Suspense>
      {/* Cast */}
      <Suspense fallback={<MoveiCreditsSkeleton />}>
        <Credits id={params.id} />
      </Suspense>
    </main>
  );
}
