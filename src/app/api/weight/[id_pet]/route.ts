import { TWeight } from '@/app/types/types';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const petId = url.pathname.split('/').pop();

    if (!petId || isNaN(Number(petId))) {
      return NextResponse.json(
        { error: 'ID do pet inválido ou não fornecido' },
        { status: 400 }
      );
    }

    const { rows } = await sql<
      TWeight[]
    >`SELECT * FROM weights WHERE id_pet = ${petId} ORDER BY date DESC`;

    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'Nenhum peso encontrado para o ID do pet fornecido' },
        { status: 404 }
      );
    }

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Erro ao consultar o banco de dados:', error);
    return NextResponse.json(
      { error: 'Erro ao consultar o banco de dados' },
      { status: 500 }
    );
  }
}
