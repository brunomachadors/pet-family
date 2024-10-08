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
    const userId = url.pathname.split('/').pop();

    if (!userId || isNaN(Number(userId))) {
      return NextResponse.json(
        { error: 'ID do usuário inválido ou não fornecido' },
        { status: 400 }
      );
    }

    const { rows } = await sql<
      TPet[]
    >`SELECT * FROM pets WHERE user_id = ${userId} ORDER BY pet_id`;

    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'Nenhum pet encontrado para o ID do usuário fornecido' },
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
