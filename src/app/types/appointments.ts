export type AppointmentType = {
  type_id: number;
  type_name: string;
  description?: string;
};

export type PetAppointment = {
  appointment_id: number;
  id_pet: number;
  activity_name: string;
  activity_date: string;
  extra_info?: string;
  frequency?: string;
  is_completed: boolean;
  type_id: number;
  type?: AppointmentType;
  created_at: string; // Campo adicionado
  updated_at: string; // Campo adicionado
};
