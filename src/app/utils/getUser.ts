export async function getUser(externalId: string) {
  try {
    const response = await fetch(`/api/users/${externalId}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar dados do usuário');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    return null;
  }
}
