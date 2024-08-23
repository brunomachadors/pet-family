import { AppointmentType, PetAppointment } from '../types/appointments';
import { fetchToken } from './token/getToken';

export async function getPetAppointments(
  idPet: number
): Promise<PetAppointment[]> {
  try {
    const token = await fetchToken();
    const response = await fetch(`/api/appointments/${idPet}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch pet appointments');
    }

    const data: PetAppointment[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching pet appointments:', error);
    throw error;
  }
}

export async function getAppointmentTypes(): Promise<AppointmentType[]> {
  try {
    const token = await fetchToken();
    const response = await fetch('/api/appointments/types', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch appointment types');
    }

    const data: AppointmentType[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching appointment types:', error);
    throw error;
  }
}
