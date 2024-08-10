export type User = {
  id?: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  externalId: string;
};

export type TPet = {
  id_pet?: number;
  name: string;
  dob?: string;
  breed?: string;
  species: string;
  sex?: string;
  color?: string;
  id_user: number;
};
