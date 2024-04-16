import { fetchPersonCredits } from '@/app/lib/data';
import Movies from '../../movies';

export default async function Credits({ id }: { id: number }) {
  const credits = await fetchPersonCredits(id);

  let unique = credits?.crew;
  if (credits?.crew) {
    unique = credits.crew.filter(
      (movie, i, self) => i === self.findIndex((t) => t.id === movie.id),
    );
  }

  return (
    <>
      {!credits ? (
        <></>
      ) : (
        <section className="flex flex-col gap-4">
          {credits?.cast && (
            <>
              <h2 className="text-lg font-bold">Cast</h2>
              <Movies movies={credits.cast} />
            </>
          )}
          <hr />
          {credits?.crew && (
            <>
              <h2 className="text-lg font-bold">Crew</h2>
              <Movies movies={unique} />
            </>
          )}
        </section>
      )}
    </>
  );
}
