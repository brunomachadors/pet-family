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
    >`SELECT * FROM weights WHERE pet_id = ${petId} ORDER BY date DESC`;

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

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const weight_id = url.pathname.split('/').pop();

    if (!weight_id) {
      return NextResponse.json(
        { error: 'ID do peso não fornecido' },
        { status: 400 }
      );
    }

    const result = await sql`
      DELETE FROM weights
      WHERE weight_id = ${weight_id}
      RETURNING *`;

    if (result.rowCount === 0) {
      return NextResponse.json(
        { error: 'Peso não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Peso removido com sucesso' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao remover o peso do banco de dados:', error);
    return NextResponse.json(
      { error: 'Erro ao remover o peso do banco de dados' },
      { status: 500 }
    );
  }
}
