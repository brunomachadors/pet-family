import { useEffect, useState } from 'react';
import {
  getPetAppointments,
  getAppointmentTypes,
} from '@/app/utils/appointments';
import { PetAppointment } from '@/app/types/appointments';

interface UsePetAppointmentsResult {
  petAppointments: PetAppointment[];
  appointmentTypes: Map<number, string>;
  error: string | null;
}

export const usePetAppointments = (petId: number): UsePetAppointmentsResult => {
  const [petAppointments, setPetAppointments] = useState<PetAppointment[]>([]);
  const [appointmentTypes, setAppointmentTypes] = useState<Map<number, string>>(
    new Map()
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!petId) {
        setError('Pet ID is not defined');
        return;
      }

      try {
        const [appointments, types] = await Promise.all([
          getPetAppointments(petId),
          getAppointmentTypes(),
        ]);

        setPetAppointments(appointments);
        setAppointmentTypes(
          new Map(types.map((type) => [type.type_id, type.type_name]))
        );
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError('Failed to fetch data');
      }
    };

    fetchAppointments();
  }, [petId]);

  return { petAppointments, appointmentTypes, error };
};
