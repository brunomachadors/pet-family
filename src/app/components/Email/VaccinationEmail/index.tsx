import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Button,
  Img,
} from '@react-email/components';

interface VaccinationEmailProps {
  dogName: string;
  petSpecies: string;
  vaccineName: string;
  dueDate: string;
}

export const VaccinationEmail: React.FC<Readonly<VaccinationEmailProps>> = ({
  dogName,
  petSpecies,
  vaccineName,
  dueDate,
}) => (
  <Html lang="pt-BR">
    <Head />
    <Body
      style={{
        margin: '0',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Container
        style={{
          maxWidth: '600px',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <Text
          style={{
            fontSize: '24px',
            color: '#333',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Notificação de Vacinação
        </Text>
        <Img
          src="https://res.cloudinary.com/dtglidvcw/image/upload/v1723991581/notification/vacina.png"
          alt="Notificação de Vacinação"
          width="50%"
          style={{
            display: 'block',
            margin: '0 auto',
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        />
        <Text style={{ fontSize: '16px', color: '#555' }}>Olá!</Text>
        <Text style={{ fontSize: '16px', color: '#555' }}>
          Este é um lembrete para informar que a vacina{' '}
          <strong>{vaccineName}</strong> para o seu {petSpecies}{' '}
          <strong>{dogName}</strong> está programada para o dia{' '}
          <strong>{dueDate}</strong>.
        </Text>
        <Text style={{ fontSize: '16px', color: '#555' }}>
          Não se esqueça de agendar uma consulta com o veterinário para garantir
          que a vacina seja aplicada a tempo.
        </Text>
        <Text style={{ fontSize: '16px', color: '#555' }}>
          Atenciosamente,
          <br />
          Equipe Pet Family
        </Text>
        <Button
          href="https://pet-family.vercel.app/"
          style={{
            backgroundColor: '#45474b',
            color: '#f5f7f8',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '20px',
          }}
        >
          Pet Family
        </Button>
      </Container>
    </Body>
  </Html>
);
