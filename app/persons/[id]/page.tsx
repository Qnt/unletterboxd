import Credits from '@/app/components/persons/[id]/credits';
import Images from '@/app/components/persons/[id]/images';
import { fetchPersonDetails } from '@/app/lib/data';
import { getGender } from '@/app/lib/utils';
import personIcon from '@/public/basic-user-icon.svg';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { id: number } }) {
  const person = await fetchPersonDetails(params.id);
  return (
    <main className="flex grow-0 flex-col gap-6 p-4">
      {/* Main details */}
      <section className="flex gap-4">
        <div className="flex aspect-[2/3] shrink-0 basis-80 flex-col">
          {person?.profile_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original${person?.profile_path}`}
              alt={person?.name ?? "Actor's profile picture"}
              width={800}
              height={800}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-md"
            />
          ) : (
            <Image
              src={personIcon}
              alt={person?.name ?? "Actor's profile picture"}
              className="my-auto h-auto w-full"
            />
          )}
        </div>
        <div className="flex flex-col gap-4 ">
          <header>
            <h2 className="text-xl font-bold">{person?.name}</h2>
          </header>
          <div>
            <h3 className="text-lg font-bold">Biography</h3>
            <p>{person?.biography}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Personal Info</h3>
            <div className="flex gap-6">
              <div>
                <h4 className="font-bold">Gender</h4>
                <p>{getGender(person?.gender)}</p>
              </div>
              <div>
                <h4 className="font-bold">Birthday</h4>
                <p>{person?.birthday}</p>
              </div>
              <div>
                <h4 className="font-bold">Place of Birth</h4>
                <p>{person?.place_of_birth}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* Pictures */}
      <Suspense fallback={<p>Loading...</p>}>
        <Images id={params.id} />
      </Suspense>
      <hr />
      <Suspense fallback={<p>Loading...</p>}>
        <Credits id={params.id} />
      </Suspense>
    </main>
  );
}
