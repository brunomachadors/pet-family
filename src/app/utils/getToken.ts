import axios from 'axios';

export async function fetchToken() {
  const response = await axios.post('/api/token');
  const { token } = response.data;
  console.log(token);
  return token;
}

export async function fetchProtectedData() {
  const token = await fetchToken();

  const apiResponse = await axios.get(
    'https://api.example.com/protected-endpoint',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return apiResponse.data;
}
