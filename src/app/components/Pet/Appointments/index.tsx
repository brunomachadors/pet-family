import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Container,
  ContentContainer,
  InfoTitle,
  StyledTable,
  TableCell,
  TableHeader,
  TableRow,
  ExpandedRow,
  ExpandedCell,
  DetailParagraph,
  DetailStrong,
} from './style';
import { TPet } from '@/app/types/types';
import { PetAppointment } from '@/app/types/appointments';
import {
  getPetAppointments,
  getAppointmentTypes,
} from '@/app/utils/appointments';
import { APPOINTMENTS, STATUS } from '@/app/assets/appointmentsIcons';

interface PetAppointmentsProps {
  pet: TPet;
}

const PetAppointments: React.FC<PetAppointmentsProps> = ({ pet }) => {
  const [isComponentExpanded, setIsComponentExpanded] = useState(false);
  const [expandedRowId, setExpandedRowId] = useState<number | null>(null);
  const [petAppointments, setPetAppointments] = useState<PetAppointment[]>([]);
  const [appointmentTypes, setAppointmentTypes] = useState<Map<number, string>>(
    new Map()
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!pet.id_pet) {
        setError('Pet ID is not defined');
        return;
      }

      try {
        const [appointments, types] = await Promise.all([
          getPetAppointments(pet.id_pet),
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
  }, [pet.id_pet]);

  const toggleComponentExpand = () => setIsComponentExpanded((prev) => !prev);

  const toggleRowExpand = (appointmentId: number) => {
    setExpandedRowId((prev) => (prev === appointmentId ? null : appointmentId));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  if (error) return <p>{error}</p>;

  return (
    <Container isVisible>
      <InfoTitle onClick={toggleComponentExpand}>
        Compromissos {isComponentExpanded ? '▲' : '▼'}
      </InfoTitle>
      <ContentContainer isVisible={isComponentExpanded}>
        <StyledTable>
          <thead>
            <TableRow>
              <TableHeader>Tipo</TableHeader>
              <TableHeader>Atividade</TableHeader>
              <TableHeader>Frequência</TableHeader>
              <TableHeader>Data</TableHeader>
              <TableHeader>Concluído</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {petAppointments.map((appointment) => (
              <React.Fragment key={appointment.appointment_id}>
                <TableRow
                  onClick={() => toggleRowExpand(appointment.appointment_id)}
                  isSelected={expandedRowId === appointment.appointment_id}
                >
                  <TableCell
                    isSelected={expandedRowId === appointment.appointment_id}
                  >
                    <Image
                      src={
                        APPOINTMENTS[appointment.type_id] ||
                        '/path/to/default/icon.png'
                      }
                      alt={
                        appointmentTypes.get(appointment.type_id) ||
                        'Desconhecido'
                      }
                      width={50}
                      height={50}
                    />
                  </TableCell>
                  <TableCell
                    isSelected={expandedRowId === appointment.appointment_id}
                  >
                    {appointment.activity_name}
                  </TableCell>
                  <TableCell
                    isSelected={expandedRowId === appointment.appointment_id}
                  >
                    {appointment.frequency}
                  </TableCell>
                  <TableCell
                    isSelected={expandedRowId === appointment.appointment_id}
                  >
                    {formatDate(appointment.activity_date)}
                  </TableCell>
                  <TableCell
                    isSelected={expandedRowId === appointment.appointment_id}
                  >
                    <Image
                      src={
                        appointment.is_completed
                          ? STATUS.completed
                          : STATUS.scheduled
                      }
                      alt={appointment.is_completed ? 'Concluído' : 'Marcado'}
                      width={50}
                      height={50}
                    />
                  </TableCell>
                </TableRow>

                {expandedRowId === appointment.appointment_id && (
                  <ExpandedRow
                    isSelected={expandedRowId === appointment.appointment_id}
                  >
                    <ExpandedCell
                      colSpan={5}
                      isSelected={expandedRowId === appointment.appointment_id}
                    >
                      <DetailParagraph>
                        <DetailStrong>Detalhes adicionais:</DetailStrong>{' '}
                        {appointment.extra_info}
                      </DetailParagraph>
                      <DetailParagraph>
                        <DetailStrong>Data de criação:</DetailStrong>{' '}
                        {formatDate(appointment.created_at)}
                      </DetailParagraph>
                      <DetailParagraph>
                        <DetailStrong>Última atualização:</DetailStrong>{' '}
                        {formatDate(appointment.updated_at)}
                      </DetailParagraph>
                    </ExpandedCell>
                  </ExpandedRow>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </StyledTable>
      </ContentContainer>
    </Container>
  );
};

export default PetAppointments;
