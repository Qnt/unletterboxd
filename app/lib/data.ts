import 'dotenv/config';
import createClient from 'openapi-fetch';
import type { paths } from './schema';
import { Movie, MoviesDiscoverQuery } from './types';

const MAIN_BASE_URL = 'https://api.themoviedb.org/';

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
};

const client = createClient<paths>({ baseUrl: MAIN_BASE_URL, ...options });

export const fetchMoviesPopular = async (page?: number) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const { data, error } = await client.GET('/3/movie/popular', {
      params: {
        query: {
          page,
        },
      },
    });
    return data?.results;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export const fetchMoviesTopRated = async (page?: number) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const { data, error } = await client.GET('/3/movie/top_rated', {
      params: {
        query: {
          page,
        },
      },
    });
    return data?.results;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export const fetchMoviesDiscover = async (
  searchParams: MoviesDiscoverQuery,
) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 4000));

    const { data, error } = await client.GET('/3/discover/movie', {
      params: {
        query: searchParams,
      },
    });
    return data?.results;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export const fetchGenres = async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 4000));

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

export const fetchMovieDetails = async (id: Movie['id']) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const { data, error } = await client.GET('/3/movie/{movie_id}', {
      params: {
        path: {
          movie_id: id,
        },
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export const fetchMovieCredits = async (id: Movie['id']) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 4000));

    const { data, error } = await client.GET('/3/movie/{movie_id}/credits', {
      params: {
        path: {
          movie_id: id,
        },
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export const fetchPersonDetails = async (id: number) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const { data, error } = await client.GET('/3/person/{person_id}', {
      params: {
        path: {
          person_id: id,
        },
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export const fetchPersonImages = async (id: number) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 4000));

    const { data, error } = await client.GET('/3/person/{person_id}/images', {
      params: {
        path: {
          person_id: id,
        },
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export const fetchPersonCredits = async (id: number) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const { data, error } = await client.GET(
      '/3/person/{person_id}/movie_credits',
      {
        params: {
          path: {
            person_id: id,
          },
        },
      },
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export const searchMovie = async (query: string) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const { data, error } = await client.GET('/3/search/movie', {
      params: {
        query: {
          query,
        },
      },
    });
    return data?.results;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

const debouncer = <T extends (...args: any[]) => ReturnType<T>>(
  callee: T,
  delay: number,
): ((...args: Parameters<T>) => Promise<ReturnType<T>>) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    return new Promise((resolve, reject) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        try {
          const result = callee(...args);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  };
};
