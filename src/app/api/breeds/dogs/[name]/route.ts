import { TDogBreed } from '@/app/types/types';
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
    const breedName = decodeURIComponent(url.pathname.split('/').pop() || '');

    if (!breedName) {
      return NextResponse.json(
        { error: 'Nome da raça não fornecido.' },
        { status: 400 }
      );
    }

    const { rows } = await sql<TDogBreed[]>`
      SELECT * FROM dog_breeds WHERE breed_name = ${breedName}
    `;

    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'Raça não encontrada.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      breed: rows[0],
    });
  } catch (error) {
    console.error('Erro ao consultar o banco de dados:', error);
    return NextResponse.json(
      { error: 'Erro ao consultar o banco de dados.' },
      { status: 500 }
    );
  }
}
