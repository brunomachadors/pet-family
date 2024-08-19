import { Resend } from 'resend';
import { sql } from '@vercel/postgres';
import { VaccinationEmail } from '@/app/components/Email/VaccinationEmail';
import { VetConsultationEmail } from '@/app/components/Email/VetConsultationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    // Query to get all pet appointments
    const { rows: appointments } = await sql`SELECT * FROM pet_appointments`;

    // Query to get all pets
    const { rows: pets } = await sql`SELECT * FROM pets`;

    // Query to get all users
    const { rows: users } = await sql`SELECT * FROM users`;

    // Query to get all appointment types
    const { rows: appointmentTypes } =
      await sql`SELECT * FROM appointment_types`;

    // Iterate over each appointment
    for (const appointment of appointments) {
      // Find the pet
      const pet = pets.find((pet) => pet.id_pet === appointment.id_pet);
      if (!pet) continue;

      // Find the user
      const user = users.find((user) => user.id_user === pet.id_user);
      if (!user) continue;

      // Find the appointment type
      const appointmentType = appointmentTypes.find(
        (type) => type.type_id === appointment.type_id
      );
      if (!appointmentType) continue;

      let emailContent;
      if (appointmentType.type_name === 'Vacinação') {
        emailContent = VaccinationEmail({
          dogName: pet.name,
          vaccineName: appointment.extra_info,
          dueDate: new Date(appointment.activity_date).toLocaleDateString(
            'pt-BR'
          ),
        });
      } else if (appointmentType.type_name === 'Consulta Veterinária') {
        emailContent = VetConsultationEmail({
          dogName: pet.name,
          appointmentDate: new Date(
            appointment.activity_date
          ).toLocaleDateString('pt-BR'),
          extraInfo: appointment.extra_info,
        });
      } else {
        continue;
      }

      // Send email
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [user.email],
        subject: `Aviso de ${appointmentType.type_name}`,
        react: emailContent,
      });
    }

    return new Response(
      JSON.stringify({ message: 'Emails enviados com sucesso!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Falha ao enviar emails:', error);
    return new Response(JSON.stringify({ error: 'Falha ao enviar emails' }), {
      status: 500,
    });
  }
}
