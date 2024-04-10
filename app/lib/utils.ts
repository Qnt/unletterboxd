import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getGender = (genderCode?: number) => {
  switch (genderCode) {
    case 1:
      return 'Female';
    case 2:
      return 'Male';
    case 3:
      return 'Non-binary';
    default:
      'Not set / not specified';
  }
};
