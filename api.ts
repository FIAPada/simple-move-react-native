export const BASE_URL =
  'https://simple-move-5b879-default-rtdb.firebaseio.com/';

export const USERS_URL = `${BASE_URL}/users.json`;

export const register = async (
  email: string,
  password: string,
  name: string,
) => {
  const response = await fetch(USERS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password, name}),
  });

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  return response.json();
};
