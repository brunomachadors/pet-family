import { TPet } from '@/app/types/types';
import { authenticateRequest } from '@/app/utils/token/authenticateRequest';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const authError = authenticateRequest(request);
    if (authError) {
      return authError;
    }

    const url = new URL(request.url);
    const petId = url.pathname.split('/').pop();

    if (!petId || isNaN(Number(petId))) {
      return NextResponse.json(
        { error: 'ID do pet inválido ou não fornecido' },
        { status: 400 }
      );
    }

    const { rows } = await sql<
      TPet[]
    >`SELECT * FROM pets WHERE pet_id = ${petId}`;

    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'Nenhum pet encontrado para o ID fornecido' },
        { status: 404 }
      );
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Erro ao consultar o banco de dados:', error);
    return NextResponse.json(
      { error: 'Erro ao consultar o banco de dados' },
      { status: 500 }
    );
  }
}
