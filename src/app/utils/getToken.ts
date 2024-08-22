export async function fetchToken() {
  try {
    const response = await fetch('/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching token: ${response.statusText}`);
    }

    const data = await response.json();
    const { token } = data;

    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
