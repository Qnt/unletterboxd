import 'dotenv/config';
import createClient from 'openapi-fetch';
import type { paths } from './schema';

const MAIN_BASE_URL = 'https://api.themoviedb.org/';

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
};

const client = createClient<paths>({ baseUrl: MAIN_BASE_URL, ...options });

export const fetchMovies = async () => {
  try {
    const { data, error } = await client.GET('/3/movie/popular');
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export const fetchGenres = async () => {
  try {
    const { data, error } = await client.GET('/3/genre/movie/list');
    return data?.genres;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export const fetchConfigDetails = async () => {
  try {
    const { data, error } = await client.GET('/3/configuration');
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch configuration data');
  }
};

// export const fetchImage = async (
//   size: BackdropSize | PosterSize | LogoSize | ProfileSize | StillSize,
//   path: string,
// ) => {
//   try {
//     const url = new URL(`${size}/${path}`, IMAGE_BASE_URL);
//     const res = await fetch(url, options);
//     if (!res.ok) {
//       throw new Error();
//     }
//     const data = res.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to fetch image');
//   }
// };

// export const fetchPoster = async (size: PosterSize, path: string) => {
//   return await fetchImage(size, path);
// };
