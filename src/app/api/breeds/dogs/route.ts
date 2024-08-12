import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    console.log('Iniciando consulta à tabela dog_breeds...');

    const { rows } = await sql`
      SELECT * FROM dog_breeds
    `;

    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'Nenhuma raça de cão encontrada' },
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
