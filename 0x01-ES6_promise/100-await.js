import { createUser, uploadPhoto } from './utils';

export default async () => {
  try {
    return { photo: await uploadPhoto(), user: await createUser() };
  } catch (err) { return { photo: null, user: null }; }
};
