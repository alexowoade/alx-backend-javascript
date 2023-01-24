import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((responses) => {
      const array = [];
      responses.forEach((response) => {
        if (response.status === 'fulfilled') {
          array.push({ status: response.status, value: response.value });
        } else array.push({ status: response.status, value: response.reason });
      });
      return array;
    });
}
