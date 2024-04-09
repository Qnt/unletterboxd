import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';
import { fetchMovieCredits } from '@/app/lib/data';
import { Movie } from '@/app/lib/types';
import basicUserLogo from '@/public/basic-user-icon.svg';
import Image from 'next/image';

export default async function Cast({ id }: { id: Movie['id'] }) {
  const credits = await fetchMovieCredits(id);
  return (
    <section>
      <h2 className="text-lg font-bold">Cast</h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 pb-3">
          {credits?.cast?.map((person) => (
            <Card
              key={person.id}
              className="flex w-32 flex-col overflow-hidden"
            >
              <CardContent className="flex h-48 flex-col p-0">
                {person?.profile_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/original${person?.profile_path}`}
                    alt={person?.name ?? "Actor's profile picture"}
                    width={300}
                    height={300}
                    className="h-auto w-full"
                  />
                ) : (
                  <Image
                    src={basicUserLogo}
                    alt={person?.name ?? "Actor's profile picture"}
                    className="my-auto h-auto w-full"
                  />
                )}
              </CardContent>
              <CardHeader className="text-wrap p-2">
                <CardTitle className=" text-base">{person?.name}</CardTitle>
                <CardDescription>{person?.character}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
