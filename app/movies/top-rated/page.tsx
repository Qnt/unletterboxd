import Movies from '@/app/components/movies';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <main className="h-full w-full">
      <section className=" flex w-full flex-col gap-4 p-4">
        <p className="text-2xl font-bold">Top Rated</p>
        <Suspense fallback={<p>Loading...</p>}>
          <Movies variant={'top-rated'} />
        </Suspense>
      </section>
    </main>
  );
}
