import basicUserLogo from '@/public/basic-user-icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Actor, CrewMember } from '../lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function PersonCard({ person }: { person: Actor | CrewMember }) {
  let description: string | undefined;
  if ('job' in person) {
    description = person?.job;
  }
  if ('character' in person) {
    description = person?.character;
  }
  return (
    <Link href={`/persons/${person.id}`}>
      <Card
        key={person.id}
        className="flex h-full w-32 flex-col overflow-hidden shadow-md hover:bg-accent"
      >
        <CardContent className="flex aspect-[2/3] flex-col p-0">
          {person?.profile_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original${person?.profile_path}`}
              alt={person?.name ?? "Actor's profile picture"}
              width={200}
              height={200}
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
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
