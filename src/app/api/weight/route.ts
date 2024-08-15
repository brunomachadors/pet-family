import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { weight, id_pet } = await request.json();

    if (weight === undefined || id_pet === undefined) {
      return NextResponse.json(
        {
          error: 'Campos obrigatórios (weight, id_pet) são necessários',
        },
        { status: 400 }
      );
    }

    if (typeof weight !== 'number' || typeof id_pet !== 'number') {
      return NextResponse.json(
        { error: 'Tipo de dado inválido' },
        { status: 400 }
      );
    }

    const currentDate = new Date().toISOString();

    const result = await sql`
      INSERT INTO weights (weight, date, id_pet)
      VALUES (${weight}, ${currentDate}, ${id_pet})
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
