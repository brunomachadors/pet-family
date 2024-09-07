import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { PetAppointment } from '../../../types/appointments';
import { authenticateRequest } from '@/app/utils/token/authenticateRequest';

export async function GET(request: Request) {
  try {
    const authError = authenticateRequest(request);
    if (authError) {
      return authError;
    }

    const url = new URL(request.url);
    const idPet = url.pathname.split('/').pop();

    if (!idPet || isNaN(Number(idPet))) {
      return NextResponse.json({ error: 'Invalid pet ID' }, { status: 400 });
    }

    const { rows } = await sql<PetAppointment[]>`
      SELECT * FROM pet_appointments
      WHERE pet_id = ${idPet}
      ORDER BY activity_date ASC
    `;

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching pet appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pet appointments' },
      { status: 500 }
    );
  }
}
