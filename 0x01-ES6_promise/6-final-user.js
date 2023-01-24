import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signupPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  const resolvedPromises = await Promise.all([signupPromise, uploadPromise]);

  const [signup, upload] = resolvedPromises;
  return [{ status: 'fulfilled', value: signup }, { status: 'fulfilled', value: upload }];
}
