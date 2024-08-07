export type User = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  emailAddresses: string;
};

export type PetType = {
  id_pet?: number;
  name: string;
  dob?: string;
  breed?: string;
  species: string;
  sex?: string;
  color?: string;
  users_id_user: number;
};
