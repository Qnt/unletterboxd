import Credits from '@/app/components/persons/[id]/credits';
import Images from '@/app/components/persons/[id]/images';
import MainInfo from '@/app/components/persons/[id]/main-info';
import {
  MoviesSkeleton,
  PersonImagesSkeleton,
  PersonMainInfoSkeleton,
} from '@/app/components/skeletons';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { id: number } }) {
  return (
    <main className="flex grow-0 flex-col gap-6 p-4">
      {/* Main details */}
      <Suspense fallback={<PersonMainInfoSkeleton />}>
        <MainInfo id={params.id} />
      </Suspense>
      <hr />
      {/* Pictures */}
      <Suspense fallback={<PersonImagesSkeleton />}>
        <Images id={params.id} />
      </Suspense>
      <hr />
      {/* Credits */}
      <Suspense fallback={<MoviesSkeleton />}>
        <Credits id={params.id} />
      </Suspense>
    </main>
  );
}
