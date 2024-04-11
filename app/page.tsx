import { Suspense } from 'react';
import Movies from './components/movies';
import { PaginationComponent } from './components/pagination';
import Loading from './loading';

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: number };
}) {
  return (
    <main className="h-full w-full">
      <section className=" flex w-full flex-col gap-4 p-4">
        <p className="text-2xl font-bold">Main Page</p>
        <Suspense fallback={<Loading />}>
          <Movies searchParams={searchParams} />
        </Suspense>
        <PaginationComponent page={searchParams?.page} />
      </section>
    </main>
  );
}
