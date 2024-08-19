export type User = {
  id?: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  externalId: string;
};

export type TPet = {
  pet_id?: number;
  name: string;
  dob?: string;
  breed?: string;
  species: string;
  sex?: string;
  color?: string;
  user_id: number;
};

export type TDogBreed = {
  id: number;
  breed_name: string;
  country_of_origin?: string;
  size?: string;
  average_weight_min?: number;
  average_weight_max?: number;
  average_height_min?: number;
  average_height_max?: number;
  lifespan_min?: number;
  lifespan_max?: number;
  common_health_issues?: string;
  energy_level?: string;
  exercise_needs?: string;
  temperament?: string;
  training_difficulty?: string;
  child_friendly?: string;
  animal_friendly?: string;
  barking_level?: string;
  coat_type?: string;
  grooming_needs?: string;
  shedding_level?: string;
  common_usage?: string;
  intelligence?: string;
  average_cost?: number;
  popularity?: number;
};

export interface TWeight {
  id_weight: number;
  weight: number;
  date: string;
  pet_id: number;
}
