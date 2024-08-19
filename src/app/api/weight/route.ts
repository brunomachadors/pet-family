import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { weight, pet_id } = await request.json();

    if (weight === undefined || pet_id === undefined) {
      return NextResponse.json(
        {
          error: 'Campos obrigatórios (weight, pet_id) são necessários',
        },
        { status: 400 }
      );
    }

    if (typeof weight !== 'number' || typeof pet_id !== 'number') {
      return NextResponse.json(
        { error: 'Tipo de dado inválido' },
        { status: 400 }
      );
    }

    const currentDate = new Date().toISOString();

    const result = await sql`
      INSERT INTO weights (weight, date, pet_id)
      VALUES (${weight}, ${currentDate}, ${pet_id})
      RETURNING *`;

    const newWeightEntry = result.rows[0];

    return NextResponse.json(newWeightEntry, { status: 201 });
  } catch (error) {
    console.error('Erro ao inserir o peso do animal no banco de dados:', error);
    return NextResponse.json(
      { error: 'Erro ao inserir o peso do animal no banco de dados' },
      { status: 500 }
    );
  }
}
