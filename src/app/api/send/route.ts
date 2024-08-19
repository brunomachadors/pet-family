import { Resend } from 'resend';
import { sql } from '@vercel/postgres';
import { VaccinationEmail } from '@/app/components/Email/VaccinationEmail';
import { VetConsultationEmail } from '@/app/components/Email/VetConsultationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { rows: appointments } = await sql`
      SELECT 
        p."name" AS pet_name, 
        p.species AS pet_species,  -- Adiciona a espécie do pet
        pt.activity_name, 
        a.description AS appointment_type_name, 
        pt.activity_date, 
        u.email, 
        pt.extra_info,
        pt.is_completed  -- Adiciona o status de conclusão do compromisso
      FROM 
        users u
      JOIN 
        pets p ON u.user_id = p.user_id
      JOIN 
        pet_appointments pt ON p.id_pet = pt.id_pet
      JOIN 
        appointment_types a ON pt.type_id = a.type_id
      WHERE 
        pt.activity_date >= CURRENT_DATE
        AND pt.is_completed = FALSE  -- Filtra apenas compromissos não concluídos
    `;

    if (appointments.length === 0) {
      return new Response(
        JSON.stringify({ message: 'Nenhum compromisso futuro encontrado.' }),
        { status: 200 }
      );
    }

    for (const appointment of appointments) {
      let emailContent;
      switch (appointment.activity_name) {
        case 'Vacinação':
          emailContent = VaccinationEmail({
            dogName: appointment.pet_name,
            petSpecies: appointment.pet_species,
            vaccineName: appointment.extra_info,
            dueDate: new Date(appointment.activity_date).toLocaleDateString(
              'pt-BR'
            ),
          });
          break;
        case 'Consulta Veterinária':
          emailContent = VetConsultationEmail({
            dogName: appointment.pet_name,
            petSpecies: appointment.pet_species,
            appointmentDate: new Date(
              appointment.activity_date
            ).toLocaleDateString('pt-BR'),
            extraInfo: appointment.extra_info,
          });
          break;
        default:
          console.log(
            `Tipo de atividade desconhecido: ${appointment.activity_name}`
          );
          continue;
      }

      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [appointment.email],
        subject: `Aviso de ${appointment.activity_name}`,
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
