import { fetchPersonImages } from '@/app/lib/data';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '../../ui/scroll-area';

export default async function Images({ id }: { id: number }) {
  const images = await fetchPersonImages(id);
  return (
    <>
      {images?.profiles && (
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Images</h2>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4 pb-3">
              {images?.profiles.map((image) => (
                <Image
                  key={image.file_path}
                  src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                  alt="image"
                  width={200}
                  height={200}
                  className="flex h-auto w-32 flex-col rounded-md shadow-md"
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      )}
    </>
  );
}
