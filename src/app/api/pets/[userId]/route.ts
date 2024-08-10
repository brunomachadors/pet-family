import { TPet } from '@/app/types/types';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
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
    >`SELECT * FROM pets WHERE id_user = ${userId} ORDER BY id_pet`;

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
