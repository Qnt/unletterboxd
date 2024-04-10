import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import { fetchMovieCredits } from '@/app/lib/data';
import { Movie } from '@/app/lib/types';
import PersonCard from '../../person-card';

export default async function Credits({ id }: { id: Movie['id'] }) {
  const credits = await fetchMovieCredits(id);
  return (
    <section>
      <h2 className="text-lg font-bold">Cast</h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 pb-3">
          {credits?.cast?.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h2 className="text-lg font-bold">Crew</h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 pb-3">
          {credits?.crew?.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
