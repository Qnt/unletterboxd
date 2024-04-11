import { Skeleton } from './ui/skeleton';

export function MoviesSkeleton() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
      {Array.from({ length: 20 }).map((_, i) => (
        <li key={i}>
          <MovieCardSkeleton />
        </li>
      ))}
    </ul>
  );
}

export function MovieCardSkeleton() {
  return <Skeleton className="aspect-[1/2]" />;
}

export function MovieMainInfoSkeleton() {
  return (
    <div className="flex gap-4">
      <Skeleton className="flex aspect-[2/3] shrink-0 basis-80 flex-col" />
      <div className="flex w-full flex-col gap-4">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-full w-full" />
      </div>
    </div>
  );
}

export function MoveiCreditsSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-5 w-16" />
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-5 w-16" />
      <Skeleton className="h-48 w-full" />
    </div>
  );
}

export function PersonMainInfoSkeleton() {
  return (
    <div className="flex gap-4">
      <Skeleton className="flex aspect-[2/3] shrink-0 basis-80 flex-col" />
      <div className="flex w-full flex-col gap-4">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-full w-full" />
        <Skeleton className="h-20 w-80" />
      </div>
    </div>
  );
}

export function PersonImagesSkeleton() {
  return (
    <>
      <Skeleton className="h-5 w-16" />
      <Skeleton className="h-48 w-full" />
    </>
  );
}

export function TitleSkeleton() {
  return <Skeleton className="h-8 w-48" />;
}
