import { nanoid } from '@reduxjs/toolkit';

export const createUser = user => {
  return {
    payload: {
      ...user,
      id: nanoid(),
    },
  };
};
