import React, { useState } from 'react';
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
import { usePetAppointments } from '@/app/hooks/usePetAppointments';
import { APPOINTMENTS, STATUS } from '@/app/assets/appointmentsIcons';
import { formatDate } from '@/app/utils/formatDate';

interface PetAppointmentsProps {
  pet: TPet;
}

const PetAppointments: React.FC<PetAppointmentsProps> = ({ pet }) => {
  const [isComponentExpanded, setIsComponentExpanded] = useState(false);
  const [expandedRowId, setExpandedRowId] = useState<number | null>(null);

  const { petAppointments, appointmentTypes, error } = usePetAppointments(
    pet.pet_id!
  );

  const toggleComponentExpand = () => setIsComponentExpanded((prev) => !prev);

  const toggleRowExpand = (appointmentId: number) => {
    setExpandedRowId((prev) => (prev === appointmentId ? null : appointmentId));
  };

  if (error) return <p>{error}</p>;

  return (
    <Container $isVisible>
      <InfoTitle onClick={toggleComponentExpand}>
        Agenda {isComponentExpanded ? '▲' : '▼'}
      </InfoTitle>
      <ContentContainer $isVisible={isComponentExpanded}>
        {petAppointments.length === 0 ? (
          <p>Sem compromissos marcados</p>
        ) : (
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
                    $isSelected={expandedRowId === appointment.appointment_id}
                  >
                    <TableCell
                      $isSelected={expandedRowId === appointment.appointment_id}
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
                      $isSelected={expandedRowId === appointment.appointment_id}
                    >
                      {appointment.activity_name}
                    </TableCell>
                    <TableCell
                      $isSelected={expandedRowId === appointment.appointment_id}
                    >
                      {appointment.frequency}
                    </TableCell>
                    <TableCell
                      $isSelected={expandedRowId === appointment.appointment_id}
                    >
                      {formatDate(appointment.activity_date)}
                    </TableCell>
                    <TableCell
                      $isSelected={expandedRowId === appointment.appointment_id}
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
                      $isSelected={expandedRowId === appointment.appointment_id}
                    >
                      <ExpandedCell
                        colSpan={5}
                        $isSelected={
                          expandedRowId === appointment.appointment_id
                        }
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
        )}
      </ContentContainer>
    </Container>
  );
};

export default PetAppointments;
