import { fetchGenres } from '../lib/data';

export default async function GenreTitle({ genreId }: { genreId?: number }) {
  const genres = await fetchGenres();
  return (
    <h2 className="text-2xl font-bold">
      {genres?.find((g) => g.id === genreId)?.name}
    </h2>
  );
}
