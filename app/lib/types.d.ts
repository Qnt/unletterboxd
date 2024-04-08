import { operations } from './schema';

type ArrayElement<T> = T extends (infer U)[] ? U : never;

export type Movies =
  operations['movie-popular-list']['responses'][200]['content']['application/json']['results'];

export type Genres =
  operations['genre-movie-list']['responses'][200]['content']['application/json']['genres'];

export type Movie = ArrayElement<Movies>;
export type Genre = ArrayElement<Genres>;

export type LinkType = {
  name: string;
  href: string;
};

export type MoviesDiscoverQuery =
  operations['discover-movie']['parameters']['query'];
