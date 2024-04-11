import { operations } from './schema';

type ArrayElement<T> = T extends (infer U)[] ? U : never;

export type Movies =
  operations['movie-popular-list']['responses'][200]['content']['application/json']['results'];

export type Genres =
  operations['genre-movie-list']['responses'][200]['content']['application/json']['genres'];
export type Actors =
  operations['movie-credits']['responses']['200']['content']['application/json']['cast'];
export type CrewMembers =
  operations['movie-credits']['responses']['200']['content']['application/json']['crew'];

export type PersonImages =
  operations['person-images']['responses']['200']['content']['application/json']['profiles'];

export type Movie = ArrayElement<Movies>;
export type Genre = ArrayElement<Genres>;
export type Actor = ArrayElement<Actors>;
export type CrewMember = ArrayElement<CrewMembers>;

export type Person =
  operations['person-details']['responses']['200']['content']['application/json'];

export type LinkType = {
  name: string;
  href: string;
};

export type MoviesDiscoverQuery =
  operations['discover-movie']['parameters']['query'];
